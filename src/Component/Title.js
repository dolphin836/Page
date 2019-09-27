import React from 'react';
import { Content, Heading } from 'react-bulma-components';

function Title(props) {
    return (
        <Content className="has-text-centered" style={{ padding: '0 0 2rem 0' }}>
            <Heading size={2} style={{ marginBottom: '2rem' }}>
                { props.title }
            </Heading>
            <Heading subtitle size={5} weight="light" className="has-text-grey">
                { props.subtitle }
            </Heading>
        </Content>
    );
}

export default Title;
