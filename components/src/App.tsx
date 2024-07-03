import React from "react";
import "./App.css";
import Results from "./components/Results";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBtn from "./components/ErrorBtn";

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary >
      <ErrorBtn />
      <Results />
      </ErrorBoundary>
    )
  }
}

