import React, { PureComponent } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Tag from 'react-bulma-components/lib/components/tag';
import Box from 'react-bulma-components/lib/components/box';
import Button from 'react-bulma-components/lib/components/button';
import { Field, Label, Checkbox } from 'react-bulma-components/lib/components/form';
import Layout from '../Component/Layout';

class GeneratorRandomPassword extends PureComponent {
  // 字符池配置
  charConfig = [
    ["Cap", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["Low", "abcdefghijklmnopqrstuvwxyz"],
    ["Num", "0123456789"],
    ["Oth", "#%*^&-_+=|[]{}()?/`~'"]
  ];
  // 默认密码长度
  defaultPasswordLength = 16;
  // 默认密码个数
  defaultPasswordCount  = 16;

  constructor(props) {
    super(props);

    this.state = {
      passwordLength: this.defaultPasswordLength,
       passwordCount: this.defaultPasswordCount,
               isCap: true,
               isLow: true,
               isNum: true,
               isOth: true
    };
  }

  // 密码长度改变
  passwordLengthChange = (e) => {
    this.setState({
      passwordLength: e.target.value
    });
  };

  // 密码个数改变
  passwordCountChange = (e) => {
    this.setState({
      passwordCount: e.target.value
    });
  };

  // 生成密码
  getPassword = (e) => {
    let password = this.generatePassword(this.getCharConfig(), this.state.passwordLength);

    this.setState({
      password: password,
    });
  };

  //
  isCapChange = (e) => {
    if (this.getCharConfigCount() > 1 || ! this.state.isCap) {
      this.setState({
        isCap: ! this.state.isCap
      });
    }
  };

  //
  isLowChange = (e) => {
    if (this.getCharConfigCount() > 1 || ! this.state.isLow) {
      this.setState({
        isLow: ! this.state.isLow
      });
    }
  };

  //
  isNumChange = (e) => {
    if (this.getCharConfigCount() > 1 || ! this.state.isNum) {
      this.setState({
        isNum: ! this.state.isNum
      });
    }
  };

  //
  isOthChange = (e) => {
    if (this.getCharConfigCount() > 1 || ! this.state.isOth) {
      this.setState({
        isOth: ! this.state.isOth
      });
    }
  };

  // 得到配置的字符类型的数量，不得小于 1
  getCharConfigCount () {
    return this.state.isCap + this.state.isLow + this.state.isNum + this.state.isOth
  }

  // 生成字符池
  getCharConfig () {
    let charConfig = "";

    for (let i = 0; i < this.charConfig.length; i++) {
      if (this.charConfig[i][0] === 'Cap' && this.state.isCap) {
        charConfig += this.charConfig[i][1];
      }
      if (this.charConfig[i][0] === 'Low' && this.state.isLow) {
        charConfig += this.charConfig[i][1];
      }
      if (this.charConfig[i][0] === 'Num' && this.state.isNum) {
        charConfig += this.charConfig[i][1];
      }
      if (this.charConfig[i][0] === 'Oth' && this.state.isOth) {
        charConfig += this.charConfig[i][1];
      }
    }

    return charConfig;
  }

  // 生成密码
  generatePassword (char, len) {
    let password = "";

    for (let i = 0; i < len; i++) {
      password += char[this.randomInt(char.length)];
    }

    return password;
  }

  // 生成随机数
  randomInt (n) {
    let x = new Uint32Array(1);

    window.crypto.getRandomValues(x);

    return x[0] % n;
  }

  render() {
    return (
      <Layout title="生成更安全的随机密码" subtitle="Generator random and safe password">
        <Columns className="is-centered">
          <Columns.Column className="is-half">
            <Tag.Group gapless style={{ justifyContent: 'center' }}>
              <Tag>密码长度</Tag>
              <Tag color="primary">{ this.state.passwordLength }</Tag>
            </Tag.Group>
            <input type="range" onChange={ this.passwordLengthChange } className="slider is-small is-fullwidth is-info" step="1" min="1" max="32" value={ this.state.passwordLength } />
          </Columns.Column>
        </Columns>

        <Columns className="is-centered">
          <Columns.Column className="is-half">
            <Tag.Group gapless style={{ justifyContent: 'center' }}>
              <Tag>密码个数</Tag>
              <Tag color="primary">{ this.state.passwordCount }</Tag>
            </Tag.Group>
            <input type="range" onChange={ this.passwordCountChange } className="slider is-small is-fullwidth is-info" step="1" min="1" max="32" value={ this.state.passwordCount } />
          </Columns.Column>
        </Columns>

        <Columns className="is-centered">
          <Columns.Column className="is-half">
            <Box>
              <Field className="is-horizontal">
                <div className="field-label">
                  <Label>字符类型</Label>
                </div>
                <div className="field-body" style={{ display: 'block' }}>
                  <Field>
                    <Checkbox onChange={this.isCapChange} checked={ this.state.isCap }>大写字母</Checkbox>
                  </Field>
                  <Field>
                    <Checkbox onChange={this.isLowChange} checked={ this.state.isLow }>小写字母</Checkbox>
                  </Field>
                  <Field>
                    <Checkbox onChange={this.isNumChange} checked={ this.state.isNum }>数字</Checkbox>
                  </Field>
                  <Field>
                    <Checkbox onChange={this.isOthChange} checked={ this.state.isOth }>符号</Checkbox>
                  </Field>
                </div>
              </Field>
            </Box>
          </Columns.Column>
        </Columns>
        <Button onClick={ this.getPassword }>生成密码</Button>
        { this.state.password }
      </Layout>
    );
  }
}

export default GeneratorRandomPassword;
