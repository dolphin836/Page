import React from 'react';
import { Link } from "react-router-dom";
import { Content, Heading } from 'react-bulma-components';

function Back() {
    return (
        <Content className="back">
            <Link to="/">
                <Heading renderAs="p" size={6} weight="light">
                    Back Home
                </Heading>
            </Link>
        </Content>
    );
}

export default Back;
