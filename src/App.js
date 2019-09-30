import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import TimestampTransform from './Page/TimestampTransform';
import GeneratorRandomPassword from './Page/GeneratorRandomPassword';
import Home from './Page/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/TimestampTransform" component={TimestampTransform} />
      <Route exact path="/GeneratorRandomPassword" component={GeneratorRandomPassword} />
    </Router>
  );
}

export default App;
