import React from 'react';
import Message from 'react-bulma-components/lib/components/message';
import Heading from 'react-bulma-components/lib/components/heading';
import { Link } from "react-router-dom";

function Item({color, isPage, link, name}) {
    if (isPage) {
        return (
            <Message color={ color } size="large">
                <Message.Body className="is-radiusless">
                    <Heading renderAs="p" size={4}>
                        <Link to={ link } style={{ textDecoration: 'none' }}>{ name }</Link>
                    </Heading>
                </Message.Body>
            </Message>
        );
    } else {
        return (
            <Message color={ color } size="large">
                <Message.Body className="is-radiusless">
                    <Heading renderAs="p" size={4}>
                        <a href={ link } style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{ name }</a>
                    </Heading>
                </Message.Body>
            </Message>
        );
    }

}

export default Item;
