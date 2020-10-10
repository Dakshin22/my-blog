import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path = "/about" component = {AboutPage}/>
        <Route path = "/articles-list" component = {ArticlesList}/>
        <Route path = "/article1" component = {ArticlePage}/>
      </div>
    </Router>
  );
}

export default App;
