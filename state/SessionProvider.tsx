'use client';

import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

type sessionProps = {
  children: React.ReactNode;
};
function NextAuthSessionProvider({ children }: sessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthSessionProvider;
