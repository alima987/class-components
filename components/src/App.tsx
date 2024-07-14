import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import { useRouter } from 'next/router';

//import { MovieProvider } from "./context/movieContext";

const App = () => {
    const router = useRouter();
    return (
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
    )
  }
export default App 