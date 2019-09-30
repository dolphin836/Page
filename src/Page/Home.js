import React from 'react';
import Footer from '../Component/Footer';
import Item from '../Component/Item';
import { Section, Container, Columns, Heading } from 'react-bulma-components';

function Home() {
  return (
    <div className="awesome">
      <div className="app">
        <Section>
          <Container>
            <Heading renderAs="h5" size={3}>工 具</Heading>
            <Columns>
              <Columns.Column>
                <Item name="时间字符串与 Unix 时间戳互转" link="TimestampTransform" color="link" isPage />
              </Columns.Column>
              <Columns.Column>
                <Item name="生成更安全的随机密码" link="GeneratorRandomPassword" color="link" isPage />
              </Columns.Column>
            </Columns>
            <Heading renderAs="h5" size={3}>应 用</Heading>
            <Columns>
              <Columns.Column>
                <Item name="图片" link="https://36photo.cn" color="success" />
              </Columns.Column>
              <Columns.Column>
                <Item name="导航" link="https://36awesome.com" color="success" />
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
