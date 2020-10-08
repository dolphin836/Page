import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import TimestampTransform from './Page/TimestampTransform';
import GeneratorRandomPassword from './Page/GeneratorRandomPassword';
import Home from './Page/Home';
import Fm from './Page/Fm';
import Channel from './Page/Channel';
import PrivateVideo from './Page/PrivateVideo';
import Video from './Page/Video';
import Password from './Page/Password';
import "rbx/index.css";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/TimestampTransform" component={TimestampTransform} />
      <Route exact path="/GeneratorRandomPassword" component={GeneratorRandomPassword} />
      <Route exact path="/Password" component={Password} />
      <Route exact path="/Fm" component={Fm} />
      <Route exact path="/Fm/Channel/:Code" component={Channel} />
      <PrivateRoute exact path="/Video" component={PrivateVideo} />
      <PrivateRoute exact path="/Video/:Code" component={Video} />
    </Router>
  );
}

export default App;
