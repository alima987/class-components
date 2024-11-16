"use client"
 import React from "react"
 import { signIn, signOut, useSession } from "next-auth/react"

 const AuthButton = () => {
    const { data: session } = useSession();

    return session ? (
        <>
            Welcome, {session.user?.name}! <br />
            <button onClick={() => signOut()}>Sign Out</button>
        </>
    ) : (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign In</button>
        </>
    );
};
 const NavMenu = () => {
    
    return (
        <div>
            <AuthButton />
        </div>
    )
 }
 export default NavMenu
