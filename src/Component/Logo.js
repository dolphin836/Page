import React from 'react';

import { Columns } from 'react-bulma-components';

function Logo() {
  return (
    <Columns className="is-centered" style={{ paddingTop: '3rem' }}>
        <Columns.Column size="half">
            <h1 className="is-size-1 has-text-black has-text-centered">程序员工具箱</h1>
        </Columns.Column>
    </Columns>
  );
}

export default Logo;