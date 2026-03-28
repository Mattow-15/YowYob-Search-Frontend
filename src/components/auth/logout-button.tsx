/**
 * Logout button component
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  return (
    <Button
      variant="outline"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Déconnexion
    </Button>
  );
}
