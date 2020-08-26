import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Data from './Data/password.json';

/**
 * 校验是否登录
 */
const isPassword = () => {
    // 读取本地存储数据
    let json = localStorage.getItem('password');

    if (null === json) {
        return false;
    }

    let password  = JSON.parse(json);
    let timestamp = password.timestamp;
    // 已过期
    if (timestamp < parseInt(Date.now() / 1000)) {
        return false;
    }  
    // 和服务端密码不一样
    if (Data.password !== password.password) {
        return false;
    }

    return true;
};

const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isPassword()
                    ?
                    <Component {...rest} {...props} />
                    :
                    <Redirect to={{
                        pathname: '/password',
                        state: {
                            from: props.location.pathname
                        }
                    }} />
            }
        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
}

export default PrivateRoute;