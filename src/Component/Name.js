import React, { PureComponent } from 'react';
import { Content, Title } from "rbx";

class Name extends PureComponent {
    // 页面加载完成
    componentDidMount() {
        // 设置页面标题
        document.title = this.props.title;
    }

    render() {
        return (
            <Content className="has-text-centered" style={{ padding: '0 0 2rem 0' }}>
                <Title size={ 2 } style={{ marginBottom: '2rem' }}>
                    { this.props.title }
                </Title>
                <Title subtitle size={ 5 } className="has-text-grey has-text-weight-light">
                    { this.props.subtitle }
                </Title>
            </Content>
        );
    }
}

export default Name;
