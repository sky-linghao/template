import React, { Component } from 'react';
// import { Redirect,NavLink, Link } from 'react-router-dom';

class View extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  componentDidUpdate() {
    setTimeout(() => {
    
  },3000)
}
    render() {
        // const { match } = this.props;
      return (
        <React.Fragment>
          
          <div>
            <input type="text" placeholder="请输入邮箱" />
            <br />
            <input type="password" placeholder="请输入密码" />
            <br />
            <input type="password" placeholder="请确认密码" />
            <ul>
              <li>我已同意用户协议</li>
              <li><button>已有账号，直接登录</button></li>
            </ul>
            <button>注册</button>
        </div>
          </React.Fragment>
        )
    }
}
export default View;