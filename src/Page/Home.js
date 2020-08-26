import React from 'react';
import Footer from '../Component/Footer';
import Item from '../Component/Item';
import { Container, Section, Column, Title } from "rbx";

function Home() {
  return (
    <div className="awesome">
      <div className="app">
        <Section>
          <Container>
            <Title as="h5" size={ 3 }>工 具</Title>
            <Column.Group>
              <Column>
                <Item name="时间字符串与 Unix 时间戳互转" content="Transform Unix Time Stamp And Data Time" link="TimestampTransform" color="link" isPage />
              </Column>
              <Column>
                <Item name="生成更安全的随机密码" content="Generator Random And Safe Password" link="GeneratorRandomPassword" color="link" isPage />
              </Column>
            </Column.Group>
            <Title as="h5" size={ 3 }>应 用</Title>
            <Column.Group>
              <Column>
                <Item name="高品质图片分享" link="https://36photo.cn/photos" color="success" />
              </Column>
              <Column>
                <Item name="精选网络应用导航" link="https://36awesome.com" color="success" />
              </Column>
            </Column.Group>
            <Column.Group>
              <Column>
                <Item name="安全的密码管理" link="https://my.36password.com" color="success" />
              </Column>
              <Column>
                <Item name="音乐电台" link="Fm" color="success" isPage />
              </Column>
            </Column.Group>
            <Title as="h5" size={ 3 }>社 交</Title>
            <Column.Group>
              <Column>
                <Item name="微博" content="部分转发内容并不代表本人观点" link="https://www.weibo.com/dolphin836" color="warning" />
              </Column>
              <Column>
                <Item name="博客" content="编程、PHP、Java、React" link="https://github.com/dolphin836/Blog" color="warning" />
              </Column>
            </Column.Group>
            <Column.Group>
              <Column>
                <Item name="邮箱" content="dolphin@36photo.cn" color="warning" />
              </Column>
              <Column>
                <Item name="私人视频" content="请勿传播" link="Video" color="warning" isPage />
              </Column>
            </Column.Group>
          </Container>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
