import React from 'react';
import Layout from '../Component/Layout';
import { Columns, Button, Heading } from 'react-bulma-components';

class TimestampTransform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datetime: this.getNowDatatTme(),
      timestamp: this.getNowTimestamp(),
      isRunning: true,
      switchName: '暂 停'
    };
  }
  // 页面加载后执行
  componentDidMount() {
    this.clock = setInterval(
      () => this.tick(),
      1000
    );
  }
  // 
  componentWillUnmount() {
    clearInterval(this.clock);
  }
  // 时钟
  tick() {
    if (this.state.isRunning) {
      this.setState({
        datetime: this.getNowDatatTme(),
        timestamp: this.getNowTimestamp()
      });
    }
  }
  // 得到当前时间
  getNowDatatTme() {
    let now       = new Date();
    let month     = now.getMonth() + 1;

    return now.getFullYear() + '-' + this.zfill(month) + '-' + this.zfill(now.getDate()) + ' ' + this.zfill(now.getHours()) + ':' + this.zfill(now.getMinutes()) + ':' + this.zfill(now.getSeconds());
  }
  // 得到当前时间戳
  getNowTimestamp() {
    return this.stringToInt(this.getNowDatatTme());
  }
  // 补零
  zfill(argc) {
    let s = "0" + argc;

    return s.substr(s.length - 2);
  }
  // 字符串转整型
  stringToInt(argc) {
    let date = new Date(argc);

    return date.getTime() / 1000;
  }

  switchTimeState = () => {
    this.setState({
      isRunning: ! this.state.isRunning,
      switchName: this.state.isRunning ? '开 启' : '暂 停'
    });
  }

  render() {
    return (
      <Layout title="时间字符串与 Unix 时间戳互转" subtitle="时间字符串与 Unix 时间戳互转">
        <Columns style={{ paddingBottom: '3rem' }}>
          <Columns.Column className="is-5 has-text-centered">
              <Heading size={5} className="has-text-dark" weight="light">
                  当前时间：{ this.state.datetime }
              </Heading>
          </Columns.Column>
          <Columns.Column className="is-2">
            <Button color="primary" fullwidth rounded onClick={ this.switchTimeState }>
            { this.state.switchName }
            </Button>
          </Columns.Column>
          <Columns.Column className="is-5 has-text-centered">
              <Heading size={5} className="has-text-dark" weight="light">
                  Unix 时间戳：{ this.state.timestamp }
              </Heading>
          </Columns.Column>
        </Columns>
        <Columns className="is-centered">
          <Columns.Column className="is-5">
              <div className="control">
                <textarea className="textarea is-focused has-fixed-size" rows="20" placeholder="时间字符串：2019-04-08 12:00:00"></textarea>
              </div>
          </Columns.Column>
          <Columns.Column className="is-2">
            <Button color="success" fullwidth rounded>
              转 换
            </Button>
            <Button color="info" fullwidth rounded style={{ marginTop: '2rem' }}>
              转 换
            </Button>
          </Columns.Column>
          <Columns.Column className="is-5">
              <div className="control">
                <textarea className="textarea is-focused has-fixed-size" rows="20" placeholder="Unix 时间戳：1520987647"></textarea>
              </div>
          </Columns.Column>
        </Columns>
      </Layout>
    );
  }
}


export default TimestampTransform;
