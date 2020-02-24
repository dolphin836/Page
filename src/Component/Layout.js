import React from 'react';
import { Container, Section } from "rbx";
import Footer from './Footer';
import Back from './Back';
import Name from './Name';

function Layout(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Section style={{ paddingTop: '0'}}>
          <Container>
            <Back />
            <Name title={ props.title } subtitle={ props.subtitle } />
            { props.children }
          </Container>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
