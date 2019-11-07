import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <p>用户名：</p><input />
                <br/>
                <p>密码：</p><input type="password"/>
                <br/>
                <br/>
                <button className="span-info">login</button> <button className="span-info">通过github登录</button> <p>忘记啦密码？</p>
            </div>
        )
    }
}