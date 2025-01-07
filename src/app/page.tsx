"use client"
import { Suspense } from 'react';
import ErrorBoundary from "../components/ErrorBoundary";
import styles from './main.module.css'
import dynamic from 'next/dynamic'
import React from 'react';

const NowPlaying = dynamic(() => import("../components/NowPlaying/NowPlaying"), {
    ssr: false,
  });
const TopRated = dynamic(() => import("../components/TopRated/TopRated"), {
    ssr: false,
  });
const AiringToday = dynamic(() => import("../components/AiringToday/AiringToday"), {
    ssr: false,
  });
const TopRatedTv = dynamic(() => import("../components/TopRatedTv/TopRatedTv"), {
    ssr: false,
  });
const Main = () => {

    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>     
            <div className={styles.movie_app}>
             <div className={styles.movies_container}>
                    <div className={styles.movies}>
                        <NowPlaying />
                        <TopRated />
                        <AiringToday />
                        <TopRatedTv />
                    </div>
                </div>
            </div>
            </Suspense>
        </ErrorBoundary>
    );
}

export default Main;
