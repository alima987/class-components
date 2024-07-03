import React from "react";
import "./App.css";
import Results from "./components/Results";
import ErrorBoundary from "./components/ErrorBoundary";

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
      <Results />
      </ErrorBoundary>
    )
  }
}

