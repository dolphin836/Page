import React from 'react';
import { Message, Heading } from 'react-bulma-components';
import { Link } from "react-router-dom";

function Item(props) {
    return (
        <Message color="link" size="large">
            <Message.Body className="is-radiusless">
                <Heading renderAs="p" size={3}>
                    <Link to={ props.link } style={{ textDecoration: 'none' }}>{ props.name }</Link>
                </Heading>
            </Message.Body>
        </Message>
    );
}

export default Item;
