import { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";

export default class App extends Component {
  render() {
    return (
      <>
      <Search />
      <Results />
      </>
    )
  }
}

