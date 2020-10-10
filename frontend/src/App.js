import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Homepage} exact />
      </div>
    </Router>
  );
}

export default App;
