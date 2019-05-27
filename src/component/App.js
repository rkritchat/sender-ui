import React from "react";
import Task from "./Task";
import Login from "./Login";
import Nav from "./Nav";
import "../style/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/task" component={Task} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
