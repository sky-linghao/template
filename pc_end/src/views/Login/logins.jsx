import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import Register from './register';

class View extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  // componentDidUpdate() {
  //   setTimeout(() => {
  //   }, 3000)
// }
    render() {
        // const { match } = this.props;
      return (
        <React.Fragment>
          <div>
            <input type="text" placeholder="请输入邮箱" />
            <br />
            <input type="password" placeholder="请输入密码" />
            <ul>
              <li>自动登陆</li>
              <li><NavLink to='/login/config'>忘记密码</NavLink></li>
              <li><NavLink to='/login/register'>注册</NavLink></li>
            </ul>
            <button>登陆1</button>
        </div>
          </React.Fragment>
        )
    }
}
export default View;