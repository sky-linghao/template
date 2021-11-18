import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
// //简历
import Resume from '../Resume';
// // 登陆
import Login from '../Login';
// // 公司
import Company from '../Company';
// // HR登陆界面
import HR from '../HR';
import Index from './index';
class View extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    ifPage(params) {
        switch (params) {
            case 'resume':
                return <Resume />
            case '':
                return <Index />
            case 'login':
                return <Login />
            case 'company':
                return <Company />
            case 'hR':
                return <HR />
            default:
                return <Index />
        }
    }
    render() {
        let { match } = this.props;
        // console.log(match.params.company)
      return (
          <React.Fragment>
              <div className='Cl1'>
                  <ul>
                      <li><NavLink to='/'>首页</NavLink></li>
                      <li><NavLink to='/company'>公司</NavLink></li>
                      <li><NavLink to='/resume'>简历</NavLink></li>
                      <li><NavLink to='/login'>登陆</NavLink></li>
                      <li><NavLink to='/login'>注册</NavLink></li>
                      <li><NavLink to='/hr'>我是HR</NavLink></li>
                  </ul>
              </div>
              <div>
                   {this.ifPage(match.params.company)}
              </div>
          </React.Fragment>
        )
    }
}
export default View;