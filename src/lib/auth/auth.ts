/**
 * NextAuth setup with backend API communication
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { httpClient } from '@/lib/api/http-client';
import { API_ENDPOINTS } from '@/lib/constants/api-endpoints';
import { verifyUser } from './users-db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await httpClient.post<any>(API_ENDPOINTS.AUTH_LOGIN, {
            email: credentials.email,
            password: credentials.password,
          });

          if (response && response.success && response.user) {
            return {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
              accessToken: response.accessToken,
              refreshToken: response.refreshToken,
            };
          }
          return null;
        } catch (error) {
          // console.error('❌ Erreur d\'authentification backend:', error);
          console.warn(`⚠️ Backend inaccessible (${(error as any).message}). Tentative avec la base locale...`);

          // Fallback: Tentative avec la base de données locale
          const localUser = verifyUser(credentials.email as string, credentials.password as string);
          if (localUser) {
            return {
              id: localUser.id,
              email: localUser.email,
              name: localUser.name,
              accessToken: 'mock_access_token_' + localUser.id,
              refreshToken: 'mock_refresh_token_' + localUser.id,
              role: localUser.role
            };
          }

          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      checks: ['none']
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // 1. Connexion via Credentials (Backend direct)
      if (user && account?.type === 'credentials') {
        token.id = user.id;
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
      }

      // 2. Connexion via Google (Token Exchange)
      if (account?.provider === 'google' && account.id_token) {
        try {
          console.log("🌐 Google Login detected. Exchanging token with Backend...");
          const response = await httpClient.post<any>(API_ENDPOINTS.AUTH_GOOGLE, {
            token: account.id_token
          });

          if (response && response.success && response.user) {
            token.id = response.user.id;
            token.accessToken = response.accessToken;
            token.refreshToken = response.refreshToken;
            token.name = response.user.name;
            token.email = response.user.email;
            console.log("✅ Token exchanged successfully!");
          }
        } catch (error) {
          console.error("❌ Token exchange failed:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as string;
        (session.user as any).accessToken = token.accessToken as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-changez-moi',
});

/**
 * Register a new user via the backend API
 */
export async function registerUser(email: string, password: string, name: string): Promise<{ success: boolean; error?: string; user?: any }> {
  console.log('🚀 INSIDE registerUser - httpClient baseUrl:', (httpClient as any).baseUrl);
  try {
    const response = await httpClient.post<any>(API_ENDPOINTS.AUTH_REGISTER, {
      email,
      password,
      name,
    });

    if (response && response.success) {
      return { success: true, user: response.user };
    }

    return {
      success: false,
      error: response?.message || 'Erreur lors de la création du compte'
    };
  } catch (error: any) {
    console.error('❌ Erreur registerUser:', error);
    return {
      success: false,
      error: error.message || 'Une erreur est survenue lors de la communication avec le serveur'
    };
  }
}