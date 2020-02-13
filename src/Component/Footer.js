import React from 'react';
import { Footer, Container, Content } from "rbx";
import DateTime from './DateTime';

export default DateTime((props) => {
  return (
    <Footer style={{ paddingBottom: '3rem', background: '#F5F5F5' }}>
      <Container>
        <Content className="has-text-centered">
          <p style={{ marginBottom: '.4rem' }}>&copy; {new Date().getFullYear()} <a href="https://www.haibing.site">海兵大侠</a> BY <a href="https://github.com/dolphin836" target="_blank" rel="noopener noreferrer">dolphin</a></p>
          <p className="is-size-7" style={{ marginBottom: '.4rem' }}>
            <a href="http://www.beian.miit.gov.cn" className="has-text-grey" target="_blank" rel="noopener noreferrer">苏 ICP 备 15001763 号 - 4</a>
          </p>
          <p className="is-size-7">{props.nowDateTime}</p>
        </Content>
      </Container>
    </Footer>
  );
})
