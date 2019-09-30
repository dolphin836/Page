import React from 'react';
import { Link } from "react-router-dom";
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

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
