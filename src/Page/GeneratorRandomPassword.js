import React, {PureComponent} from 'react';
import Layout from '../Component/Layout';
import Clipboard from 'react-clipboard.js';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { Button, Content, Column, Title, Tag, Label, Checkbox } from "rbx";

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
    defaultPasswordCount = 10;

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

        let password   = [];
        let charConfig = this.getCharConfig();

        for (let i = 0; i < this.state.passwordCount; i++) {
            password.push(this.generatePassword(charConfig, this.state.passwordLength));
        }

        let passwordGroup = [];

        for (let i = 0; i < password.length; i++) {
            passwordGroup.push(<div key={i}><Clipboard onSuccess={this.getPasswordSuccess} component="h5" data-clipboard-text={password[i]} button-title="单击复制到剪切板">{password[i]}</Clipboard></div>);
        }

        this.state.password      = password;
        this.state.passwordGroup = passwordGroup;
    }


    // 密码长度改变
    getPasswordSuccess = () => {
        store.addNotification({
            title: "成功",
            message: "已复制密码到剪切板",
            type: "success",
            insert: "bottom",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    };

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
    getPassword = () => {
        let password      = [];
        let passwordGroup = [];
        let charConfig    = this.getCharConfig();

        for (let i = 0; i < this.state.passwordCount; i++) {
            password.push(this.generatePassword(charConfig, this.state.passwordLength));
        }

        for (let i = 0; i < password.length; i++) {
            passwordGroup.push(<div key={i}><Clipboard onSuccess={this.getPasswordSuccess} component="h5" data-clipboard-text={password[i]} button-title="单击复制到剪切板">{password[i]}</Clipboard></div>);
        }

        this.setState({
                 password: password,
            passwordGroup: passwordGroup
        });
    };

    //
    isCapChange = () => {
        console.log(1);
        if (this.getCharConfigCount() > 1 || !this.state.isCap) {
            this.setState({
                isCap: !this.state.isCap
            });
        }
    };

    //
    isLowChange = () => {
        if (this.getCharConfigCount() > 1 || !this.state.isLow) {
            this.setState({
                isLow: !this.state.isLow
            });
        }
    };

    //
    isNumChange = () => {
        if (this.getCharConfigCount() > 1 || !this.state.isNum) {
            this.setState({
                isNum: !this.state.isNum
            });
        }
    };

    //
    isOthChange = () => {
        if (this.getCharConfigCount() > 1 || !this.state.isOth) {
            this.setState({
                isOth: !this.state.isOth
            });
        }
    };

    // 得到配置的字符类型的数量，不得小于 1
    getCharConfigCount() {
        return this.state.isCap + this.state.isLow + this.state.isNum + this.state.isOth
    }

    // 生成字符池
    getCharConfig() {
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
    generatePassword(char, len) {
        let password = "";

        for (let i = 0; i < len; i++) {
            password += char[this.randomInt(char.length)];
        }

        return password;
    }

    // 生成随机数
    randomInt(n) {
        let x = new Uint32Array(1);

        window.crypto.getRandomValues(x);

        return x[0] % n;
    }

    render() {
        return (
            <Layout title="生成更安全的随机密码" subtitle="Generator random and safe password">
                <ReactNotification />
                <Column.Group>
                    <Column className="is-5">
                        <Content>
                            <Tag.Group gapless style={{justifyContent: 'center'}}>
                                <Tag>密码长度</Tag>
                                <Tag color="primary">{this.state.passwordLength}</Tag>
                            </Tag.Group>
                            <input type="range" onChange={this.passwordLengthChange}
                                   className="slider"
                                   step="1" min="6" max="40" value={this.state.passwordLength}/>
                        </Content>
                        <Content>
                            <Tag.Group gapless style={{justifyContent: 'center'}}>
                                <Tag>密码个数</Tag>
                                <Tag color="primary">{this.state.passwordCount}</Tag>
                            </Tag.Group>
                            <input type="range" onChange={this.passwordCountChange}
                                   className="slider"
                                   step="1" min="1" max="20" value={this.state.passwordCount}/>
                        </Content>
                        <Title size={4}>字符集</Title>
                        <Content>
                            <Label style={{ paddingLeft: 0 }} onClick={this.isCapChange}>
                                <Checkbox as="span" checked={this.state.isCap}
                                      className={this.state.isCap ? 'is-checked' : ''}> A B C D E F G H I J K L M
                                N O P Q R S T U V W X Y Z</Checkbox>
                            </Label>
                        </Content>
                        <Content>
                            <Label style={{ paddingLeft: 0 }} onClick={this.isLowChange}>
                                <Checkbox as="span" checked={this.state.isLow}
                                      className={this.state.isLow ? 'is-checked' : ''}> a b c d e f g h i j k l m
                                n o p q r s t u v w x y z</Checkbox>
                            </Label>
                        </Content>
                        <Content>
                            <Label style={{ paddingLeft: 0 }} onClick={this.isNumChange}>
                                <Checkbox as="span" checked={this.state.isNum}
                                      className={this.state.isNum ? 'is-checked' : ''}> 0 1 2 3 4 5 6 7 8
                                9</Checkbox>
                            </Label>
                        </Content>
                        <Content>
                            <Label style={{ paddingLeft: 0 }} onClick={this.isOthChange}>
                                <Checkbox as="span" checked={this.state.isOth}
                                      className={this.state.isOth ? 'is-checked' : ''}> # % * ^ & - _ + = | [
                                ] {} ( ) ? / ` ~ '</Checkbox>
                            </Label>
                        </Content>
                        <Button color="info" size="medium" fullwidth rounded onClick={this.getPassword}
                                style={{marginTop: '4rem'}}>换一组</Button>
                    </Column>
                    <Column className="is-2">
                    </Column>
                    <Column className="is-5">
                        <div className="password-group">
                            {this.state.passwordGroup}
                        </div>
                    </Column>
                </Column.Group>
            </Layout>
        );
    }
}

export default GeneratorRandomPassword;
