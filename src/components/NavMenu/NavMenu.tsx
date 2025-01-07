"use client"
 import React from "react"
 import { signOut, useSession } from "next-auth/react"
 import Link from "next/link";
 import styles from './NavMenu.module.css';

 const AuthButton = () => {
    const { data: session } = useSession();

    return session ? (
        <div className={styles.authButtonContainer}>
            <div className={styles.welcomeMessage}>
                Welcome, {session.user?.name}!
            </div>
            <button className={styles.signOutButton} onClick={() => signOut()}>
                Sign Out
            </button>
        </div>
    ) : (
        <div className={styles.authButtonContainer}>
            <Link href='/login' className={styles.signInLink}>
                Sign In
            </Link>
        </div>
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