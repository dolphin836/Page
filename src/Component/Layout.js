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
          <Back></Back>
          <Title title={ props.title } subtitle={ props.subtitle }></Title>
          { props.children }
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
