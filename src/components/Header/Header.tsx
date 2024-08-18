"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Search from "../Search/Search";
import styles from './header.module.css';

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className={styles.header}>
            <div className={styles.header_menu}>
                <Link href="/">
                    <p className={pathname === '/' ? styles.active : styles.header_home}>Home</p>
                </Link>
                <Link href="/movies">
                    <p className={pathname === '/movies' ? styles.active : styles.header_movies}>Movies</p>
                </Link>
                <Link href="/tv">
                    <p className={pathname === '/tv' ? styles.active : styles.header_tvs}>TV Shows</p>
                </Link>
            </div>
            <button className={styles.burger_menu} onClick={toggleMenu}>
                {isMenuOpen ? '✖' : '☰'}
            </button>
            <Search />
            {isMenuOpen && (
                <div className={styles.mobile_menu}>
                     <button className={styles.close_menu} onClick={closeMenu}>
                        ✖
                    </button>
                    <Link href="/" onClick={toggleMenu}>
                        <p className={pathname === '/' ? styles.active : styles.header_home}>Home</p>
                    </Link>
                    <Link href="/movies" onClick={toggleMenu}>
                        <p className={pathname === '/movies' ? styles.active : styles.header_movies}>Movies</p>
                    </Link>
                    <Link href="/tv" onClick={toggleMenu}>
                        <p className={pathname === '/tv' ? styles.active : styles.header_tvs}>TV Shows</p>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
