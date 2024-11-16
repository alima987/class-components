/*"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"


export default function StoreProvider ({ session, children }: { session: Session | null, children: React.ReactNode }) {
    return <Provider store={store}>
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
            </Provider>;
}

//{ children }: { children: React.ReactNode }*/

"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export default function StoreProvider({
    session,
    children,
}: {
    session?: Session | null;
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <SessionProvider session={session || null}>
                {children}
            </SessionProvider>
        </Provider>
    );
}
