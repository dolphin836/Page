import React from 'react';
import { Link } from "react-router-dom";
import { Content, Title } from "rbx";

function BackFm() {
    return (
        <Content className="back">
            <Link to="/Fm">
                <Title as="p" size={ 6 } className="has-text-weight-light">
                    Back Fm
                </Title>
            </Link>
        </Content>
    );
}

export default BackFm;
