import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import Contact from "./Contact";

function App() {
  return (
    <Suspense fallback={<div>lol</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
