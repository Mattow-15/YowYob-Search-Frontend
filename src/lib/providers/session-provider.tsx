/**
 * Session Provider wrapper
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}