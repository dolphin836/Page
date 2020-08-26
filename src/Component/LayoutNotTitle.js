import React from 'react';
import { Container, Section } from "rbx";
import Footer from './Footer';
import Back from './Back';

function LayoutNotTitle(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Section style={{ paddingTop: '0'}}>
          <Container>
            <Back />
            { props.children }
          </Container>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutNotTitle;
