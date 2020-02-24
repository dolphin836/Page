import React from 'react';
import { Icon } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Playing({ ListId, RunId }) {
    let e;

    if (ListId === RunId) {
        e = <Icon color="success" size="small"><FontAwesomeIcon icon={faCircle} size="xs" /></Icon>
    } else {
        let s = "0" + (ListId + 1);
        let m = s.substr(s.length - 2);
        e = <span className="has-text-grey-lighter has-text-weight-light">{ m }</span>;
    }

    return (
        <div className="channel-run-icon">{ e }</div>
    );
}

export default Playing;
