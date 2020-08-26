import React from 'react';
import { Container, Section, Title, Image, Content } from "rbx";
import Back from './Back';

const Photo = '../../Asset/Fm/Photo/';

function FmLayout(props) {
  return (
    <div className="awesome">
      <div className="app">
        <Section style={{ paddingTop: '0' }}>
          <Container>
            <Back back="/Fm" backname="Fm" />
            <Content className="has-text-centered">
              <Title as="h5" size={ 5 }>
                { props.title }
              </Title>
              <Title as="p" size={ 7 } subtitle className="has-text-grey has-text-weight-light">
                { props.content }
              </Title>
            </Content>
            <Image.Container className="channel-cover">
              <Image src={ Photo + props.photo } className="channel-photo" />
            </Image.Container>
            { props.children }
          </Container>
        </Section>
      </div>
    </div>
  );
}

export default FmLayout;
