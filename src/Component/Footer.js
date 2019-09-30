import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

export default () => {
  return (
    <Footer>
      <Container>
        <Content className="has-text-centered">
            <p style={{ marginBottom: '.4rem' }}>&copy; 2019 <a href="https://www.haibing.site">程序员工具箱</a> BY <a href="https://github.com/dolphin836/Blog" target="_blank" rel="noopener noreferrer">dolphin</a></p>
            <p className="is-size-7">
                <a href="http://www.beian.miit.gov.cn" className="has-text-grey" target="_blank" rel="noopener noreferrer">苏 ICP 备 15001763 号 - 4</a>
            </p>
        </Content>
      </Container>
    </Footer>
  );
}
