import React, { PureComponent } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Tag from 'react-bulma-components/lib/components/tag';
import Box from 'react-bulma-components/lib/components/box';
import { Field, Label, Control, Checkbox } from 'react-bulma-components/lib/components/form';
import Layout from '../Component/Layout';

class GeneratorRandomPassword extends PureComponent {
  constructor(props) {
    super(props);

    let passwordLength = 16;
    let password       = this.generatePassword(this.getCharConfig(), passwordLength);

    this.state = {
      passwordLength: passwordLength,
            password: password,
               isCap: true,
               isLow: true,
               isNum: true,
               isOth: false
    };
  }

  // 字符池配置
  charConfig = [
    [true,  "Cap", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    [true,  "Low", "abcdefghijklmnopqrstuvwxyz"],
    [true,  "Num", "0123456789"],
    [false, "Oth", "#%*^&-_+=|[]{}()?/`~'"]
  ];

  // 密码长度改变
  passwordLengthChange = (e) => {
    this.setState({
      passwordLength: e.target.value
    });
  };

  //
  isCapChange = (e) => {
    this.setState({
      isCap: ! this.state.isCap
    });
  };

  //
  isLowChange = (e) => {
    this.setState({
      isLow: ! this.state.isLow
    });
  };

  //
  isNumChange = (e) => {
    this.setState({
      isNum: ! this.state.isNum
    });
  };

  //
  isOthChange = (e) => {
    this.setState({
      isOth: ! this.state.isOth
    });
  };

  // 生成字符池
  getCharConfig () {
    let charConfig = "";

    this.charConfig.forEach(function(char) {
      if (char[0]) {
        charConfig += char[2];
      }
    });

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
            <input type="range" onChange={ this.passwordLengthChange } className="slider is-small is-fullwidth is-info" step="1" min="6" max="32" value={ this.state.passwordLength } />
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


        {/*<Checkbox>小写字母</Checkbox>*/}
        {/*<Checkbox>数字</Checkbox>*/}
        {/*<Checkbox>符号</Checkbox>*/}
        { this.state.password }
      </Layout>
    );
  }
}

export default GeneratorRandomPassword;
