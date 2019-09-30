import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Footer from './Footer';
import Back from './Back';
import Title from './Title';

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
