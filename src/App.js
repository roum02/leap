import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyStory from "./pages/MyStory";
import About from "./pages/About";
import With from "./pages/With";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/mystory" component={MyStory} />
        <Route exact path="/about" component={About} />
        <Route exact path="/with" component={With} />
        <Route exact path="/work" component={Work} />
      </Switch>
    </Router>
  );
}

export default App;
