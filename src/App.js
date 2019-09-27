import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import Home from './Page/Home';
import TimestampTransform from './Page/TimestampTransform';
import GeneratorRandonPassword from './Page/GeneratorRandonPassword';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/TimestampTransform" component={TimestampTransform} />
      <Route exact path="/GeneratorRandonPassword" component={GeneratorRandonPassword} />
    </Router>
  );
}

export default App;
