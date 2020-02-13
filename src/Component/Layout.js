import React from 'react';
import { Container } from "rbx";
import Footer from './Footer';
import Back from './Back';
import Name from './Name';

function Layout(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Container>
          <Back />
          <Name title={ props.title } subtitle={ props.subtitle } />
          { props.children }
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
