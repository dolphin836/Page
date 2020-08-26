import React from 'react';
import { Link } from "react-router-dom";
import { Content, Title } from "rbx";

function Back(props) {
    return (
        <Content className="back">
            <Link to={ props.back || '/' }>
                <Title as="p" size={ 6 } className="has-text-weight-light">
                    Back { props.backname || 'Home' }
                </Title>
            </Link>
        </Content>
    );
}

export default Back;
