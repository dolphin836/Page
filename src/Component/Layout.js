import React from 'react';
import Footer from './Footer';
import Back from './Back';
import Title from './Title';
import { Container } from 'react-bulma-components';

function Layout(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Container>
          <Back />
          <Title title={ props.title } subtitle={ props.subtitle } />
          { props.children }
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
