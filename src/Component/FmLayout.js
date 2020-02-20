import React from 'react';
import { Container } from "rbx";
import BackFm from './BackFm';
import Name from './Name';

function FmLayout(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Container>
          <BackFm />
          <Name title={ props.title } subtitle={ props.subtitle } />
          { props.children }
        </Container>
      </div>
    </div>
  );
}

export default FmLayout;
