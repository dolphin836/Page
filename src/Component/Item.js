import React from 'react';
import { Link } from "react-router-dom";
import { Message, Title } from "rbx";

function Item({color, isPage, link, name, content}) {

    let nameLink;

    if (isPage) {
        nameLink = <Link to={ link } style={{ textDecoration: 'none' }}>{ name }</Link>;
    } else {
        nameLink = <a href={ link } style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{ name }</a>;
    }

    let contentNode;

    if (content) {
        contentNode = <Title size={ 6 } subtitle className="has-text-grey has-text-weight-light">{ content }</Title>
    }

    return (
        <Message color={ color } size="large">
            <Message.Body className="is-radiusless">
                <Title as="p" size={ 4 }>
                    { nameLink }
                </Title>
                { contentNode }
            </Message.Body>
        </Message>
    );
}

export default Item;
