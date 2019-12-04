import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';

class Password extends Component {
    constructor (props) {
        super(props);

        let passwordGroup = [];

        for (let i = 0; i < props.password.length; i++) {
            passwordGroup.push(<div key={i}><Clipboard component="h5" data-clipboard-text={props.password[i]} button-title="单击复制到剪切板">{props.password[i]}</Clipboard></div>);
        }

        this.state = {
            passwordGroup: passwordGroup
        };
    }

    render() {
        return (
            <div className="password-group">
                {this.state.passwordGroup}
            </div>
        );
    }
}

export default Password;
