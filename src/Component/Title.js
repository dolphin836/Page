import React, { PureComponent } from 'react';
import { Content, Heading } from 'react-bulma-components';

class Title extends PureComponent {
    constructor(props) {
        super(props);
    }

    // 页面加载完成
    componentDidMount() {
        // 设置页面标题
        document.title = this.props.title;
    }

    render() {
        return (
            <Content className="has-text-centered" style={{ padding: '0 0 2rem 0' }}>
                <Heading size={2} style={{ marginBottom: '2rem' }}>
                    { this.props.title }
                </Heading>
                <Heading subtitle size={5} weight="light" className="has-text-grey">
                    { this.props.subtitle }
                </Heading>
            </Content>
        );
    }
}

export default Title;
