import React, { PureComponent } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import Layout from '../Component/Layout';

class TimestampTransform extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
       nowDateTime: this.getNowDateTme(),
      nowTimeStamp: this.getNowTimestamp(),
         isRunning: true,
        switchName: '暂 停',
          dateTime: '',
         timeStamp: ''
    };
  }
  // 页面加载完成，创建时钟
  componentDidMount() {
    this.clock = setInterval(
      () => this.running(),
      1000
    );
  }
  // 注销页面，清除时钟
  componentWillUnmount() {
    clearInterval(this.clock);
  }
  // 切换时钟运行状态
  switchTimeState = () => {
    this.setState({
       isRunning: ! this.state.isRunning,
      switchName: this.state.isRunning ? '开 启' : '暂 停'
    });
  };
  // 时间字符串与 Unix 时间戳互转
  transform = () => {
    if (this.state.dateTime.length > 0) {
      let timeStamp = this.stringToInt(this.state.dateTime);

      if (! isNaN(timeStamp)) {
        this.setState({
          timeStamp: timeStamp
        });
      }
    }

    if (this.state.timeStamp.length > 0) {
      let dateTime = this.intToString(this.state.timeStamp);

      if (! isNaN(dateTime)) {
        this.setState({
          dateTime: dateTime
        });
      }
    }
  };
  // 清空
  clean = () => {
    this.setState({
       dateTime: '',
      timeStamp: ''
    });
  };
  // 时间字符串改变
  dateTimeChange = (e) => {
    this.setState({
      dateTime: e.target.value
    });
  };
  // Unix 时间戳改变
  timeStampChange = (e) => {
    this.setState({
      timeStamp: e.target.value
    });
  };
  // 时钟
  running() {
    if (this.state.isRunning) {
      this.setState({
         nowDateTime: this.getNowDateTme(),
        nowTimeStamp: this.getNowTimestamp()
      });
    }
  }
  // 得到当前日期时间字符串
  getNowDateTme() {
    let dateTime = new Date();

    return this.getDateTime(dateTime);
  }
  // 得到当前时间戳
  getNowTimestamp() {
    return this.stringToInt(this.getNowDateTme());
  }
  // 得到 Y-m-d H:i:s 格式的日期时间字符串
  getDateTime(dateTime) {
    let month = dateTime.getMonth() + 1;

    return dateTime.getFullYear() + '-' + this.zFill(month) + '-' + this.zFill(dateTime.getDate()) + ' ' + this.zFill(dateTime.getHours()) + ':' + this.zFill(dateTime.getMinutes()) + ':' + this.zFill(dateTime.getSeconds());
  }
  // 补零
  zFill(argc) {
    let s = "0" + argc;

    return s.substr(s.length - 2);
  }
  // 字符串转整型
  stringToInt(argc) {
    let date = new Date(argc);

    return date.getTime() / 1000;
  }
  // 整型转字符串
  intToString(argc) {
    let dateTime = new Date(argc * 1000);

    return this.getDateTime(dateTime);
  }

  render() {
    return (
      <Layout title="时间字符串与 Unix 时间戳互转" subtitle="时间字符串与 Unix 时间戳互转">
        <Columns style={{ paddingBottom: '3rem' }}>
          <Columns.Column className="is-5 has-text-centered">
              <Heading size={5} className="has-text-dark" weight="light">
                  当前时间：{ this.state.nowDateTime }
              </Heading>
          </Columns.Column>
          <Columns.Column className="is-2">
            <Button color="primary" fullwidth rounded onClick={ this.switchTimeState }>
            { this.state.switchName }
            </Button>
          </Columns.Column>
          <Columns.Column className="is-5 has-text-centered">
              <Heading size={5} className="has-text-dark" weight="light">
                  Unix 时间戳：{ this.state.nowTimeStamp }
              </Heading>
          </Columns.Column>
        </Columns>
        <Columns className="is-centered">
          <Columns.Column className="is-5">
              <div className="control">
                <textarea value={ this.state.dateTime } onChange={ this.dateTimeChange } className="textarea is-focused has-fixed-size" rows="20" placeholder="时间字符串" />
              </div>
          </Columns.Column>
          <Columns.Column className="is-2">
            <Button color="success" fullwidth rounded onClick={ this.transform }>
              转 换
            </Button>
            <Button color="info" fullwidth rounded style={{ marginTop: '2rem' }} onClick={ this.clean }>
              清 空
            </Button>
          </Columns.Column>
          <Columns.Column className="is-5">
              <div className="control">
                <textarea value={ this.state.timeStamp } onChange={ this.timeStampChange } className="textarea is-focused has-fixed-size" rows="20" placeholder="Unix 时间戳" />
              </div>
          </Columns.Column>
        </Columns>
      </Layout>
    );
  }
}


export default TimestampTransform;
