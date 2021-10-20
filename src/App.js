import React from "react";
import { BrowserRouter as BR, Route, Switch, useHistory } from "react-router-dom";

import "./assets/main.scss";
import Home from "./components/home.js";
import Contact from "./components/contact";
import Education from "./components/edu";
import Exp from "./components/exp";
import Abt from "./components/abt";
function App() {

 
  return (
    <div className="App">
      <BR>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/edu" component={Education} />
          <Route path="/exp" component={Exp} />
          <Route path="/about" component={Abt} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
