/**
 * Conditional Layout based on auth status
 * @author Matteo Owona, Rouchda Yampen
 */

'use client';

import { useSession } from 'next-auth/react';
import { HeaderPublic } from './header-public';
import { HeaderAuthenticated } from './header-authenticated';


export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <HeaderAuthenticated userName={session.user?.name || undefined} />
      ) : (
        <HeaderPublic />
      )}
      {children}

    </>
  );
}