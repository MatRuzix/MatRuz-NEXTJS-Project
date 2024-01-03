"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import { Session } from "next-auth";

type AppProviderProps = {
  children: React.ReactNode;
  session: Session | null;
};

const AppProvider: React.FC<AppProviderProps> = ({ children, session }) => {
  return (
    <React.Suspense fallback={<p>loading...</p>}>
      <SessionProvider session={session}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </SessionProvider>
    </React.Suspense>
  );
};

export default AppProvider;
