import React from 'react';
import { Link } from "react-router-dom";
import { Content, Title } from "rbx";

function Back() {
    return (
        <Content className="back">
            <Link to="/">
                <Title as="p" size={ 6 } className="has-text-weight-light">
                    Back Home
                </Title>
            </Link>
        </Content>
    );
}

export default Back;
