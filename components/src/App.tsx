import React from "react";
import "./App.css";
import Main from "./pages/Main";
import ErrorBoundary from "./components/ErrorBoundary";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShow";

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVShows />}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    )
  }
}

