import React from 'react';
import { Message, Heading } from 'react-bulma-components';
import { Link } from "react-router-dom";

function Item(props) {
    if (props.isPage) {
        return (
            <Message color={ props.color } size="large">
                <Message.Body className="is-radiusless">
                    <Heading renderAs="p" size={4}>
                        <Link to={ props.link } style={{ textDecoration: 'none' }}>{ props.name }</Link>
                    </Heading>
                </Message.Body>
            </Message>
        );
    } else {
        return (
            <Message color={ props.color } size="large">
                <Message.Body className="is-radiusless">
                    <Heading renderAs="p" size={4}>
                        <a href={ props.link } style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{ props.name }</a>
                    </Heading>
                </Message.Body>
            </Message>
        );
    }

}

export default Item;
