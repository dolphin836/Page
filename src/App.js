import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TimestampTransform from './Page/TimestampTransform';
import GeneratorRandomPassword from './Page/GeneratorRandomPassword';
import Home from './Page/Home';
import Fm from './Page/Fm';
import Channel from './Page/Channel';
import "rbx/index.css";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/TimestampTransform" component={TimestampTransform} />
      <Route exact path="/GeneratorRandomPassword" component={GeneratorRandomPassword} />
      <Route exact path="/Fm" component={Fm} />
      <Route exact path="/Fm/Channel/:Id" component={Channel} />
    </Router>
  );
}

export default App;
