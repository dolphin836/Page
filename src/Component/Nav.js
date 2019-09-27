import React from 'react';
import { Tabs } from 'react-bulma-components';

function Nav(props) {
    return (
        <Tabs align="centered">
            <Tabs.Tab href="/" active={props.page === 'Home' ? true : false}>
                导 航
            </Tabs.Tab>
            <Tabs.Tab href="/TimestampTransform" active={props.page === 'TimestampTransform' ? true : false}>
                时间戳转换
            </Tabs.Tab>
            <Tabs.Tab href="/GeneratorRandonPassword" active={props.page === 'GeneratorRandonPassword' ? true : false}>
                生成随机密码
            </Tabs.Tab>
        </Tabs>
    );
}

export default Nav;
