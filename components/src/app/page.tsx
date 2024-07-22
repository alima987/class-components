"use client"
import React, { Suspense } from 'react';
import ErrorBoundary from "../components/ErrorBoundary";
import styles from './main.module.css'

const NowPlaying = React.lazy(() => import("../components/NowPlaying/NowPlaying"));
const TopRated = React.lazy(() => import("../components/TopRated/TopRated"));
const AiringToday = React.lazy(() => import("../components/AiringToday/AiringToday"));
const TopRatedTv = React.lazy(() => import("../components/TopRatedTv/TopRatedTv"));

const Main = () => {
    return (
        <ErrorBoundary>
            <div className={styles.movie_app}>
                <div className={styles.movies_container}>
                    <div className={styles.movies}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <NowPlaying />
                            <TopRated />
                            <AiringToday />
                            <TopRatedTv />
                        </Suspense>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default Main;

