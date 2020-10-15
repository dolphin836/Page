import React, { PureComponent } from 'react';
import { Column, Input } from "rbx";
import LayoutNotTitle from '../Component/LayoutNotTitle';
import Data from '../Data/password.json';

class Password extends PureComponent {
    // 键盘事件
    onKeyPress = (e) => {
        // 回车键
        if (e.charCode === 13) {
            // 判断密码是否正确
            if (e.target.value !== Data.password) {
                alert('密码错误');

                return;
            }

            // 添加到 Local Storage 中，有效期 10 天
            let password = {
                 password: e.target.value,
                timestamp: parseInt(Date.now() / 1000) + (10 * 24 * 3600) 
            };

            localStorage.setItem('password', JSON.stringify(password));
            // 跳转
            let nextPage;

            if (this.props.location.state != null) {
                nextPage = this.props.location.state.from
            }

            const page = nextPage || '/';

            this.props.history.push(page);
        }
    }

    render() {
        return (
            <LayoutNotTitle>
                <Column.Group vcentered style={{ "minHeight": "50vh" }}>
                    <Column size={4} offset={4}>
                        <Input type="text" color="info" size="large" onKeyPress={ this.onKeyPress } placeholder="输入密码" />
                    </Column>
                </Column.Group>
            </LayoutNotTitle>
        );
    }
}

export default Password;
