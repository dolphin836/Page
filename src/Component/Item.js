import React from 'react';
import Message from 'react-bulma-components/lib/components/message';
import Heading from 'react-bulma-components/lib/components/heading';
import { Link } from "react-router-dom";

function Item({color, isPage, link, name}) {

    let nameLink;

    if (isPage) {
        nameLink = <Link to={ link } style={{ textDecoration: 'none' }}>{ name }</Link>;
    } else {
        nameLink = <a href={ link } style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{ name }</a>;
    }

    return (
        <Message color={ color } size="large">
            <Message.Body className="is-radiusless">
                <Heading renderAs="p" size={4}>
                    { nameLink }
                </Heading>
            </Message.Body>
        </Message>
    );
}

export default Item;
