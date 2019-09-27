import React from 'react';
import Footer from '../Component/Footer';
import Item from '../Component/Item';
import { Section, Container, Columns } from 'react-bulma-components';

function Home() {
  return (
    <div className="awesome">
      <div className="app">
        <Section>
          <Container>
            <Columns>
              <Columns.Column>
                <Item name="时间字符串与 Unix 时间戳互转" link="TimestampTransform"></Item>
              </Columns.Column>
              <Columns.Column>
                <Item name="生成更安全的随机密码" link="GeneratorRandonPassword"></Item>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
