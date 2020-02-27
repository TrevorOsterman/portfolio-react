import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Intro} />
      <Route exact path="/" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
