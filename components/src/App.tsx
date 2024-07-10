import React from "react";
import "./App.css";
import Results from "./pages/Results";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GenresPage from "./pages/GenresPage";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Results />}/>
            <Route path="/genres" element={<GenresPage />}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    )
  }
}

