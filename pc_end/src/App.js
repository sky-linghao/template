import React, { Component, Suspense, lazy, Fragment } from 'react';
import { Redirect, Route, Router, Switch, withRouter } from 'react-router-dom';
/*
 Api 简介
 Route : 用来配置路由线路
 Switch : 只显示匹配到的第一个
*/

//引入方法一
// 首页
import Home from './views/Home'

//简历
import Resume from './views/Resume';
// 登陆
import Login from './views/Login';
// 公司
import Company from './views/Company';
// HR登陆界面
import HR from './views/HR';
/*
  引入方法二（优化）摸鱼专用
  const Home = lazy(()=>import('./View/Home'))
*/


class App extends Component {
  render() {
    return (
      <Suspense fallback="dd">
        <Switch fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />

          <Route exact path="/resume" component={Resume} />
          <Route exact path="{`/resume/:url`}" component={Resume} />

          <Route exact path="/login" component={Login} />
          <Route exact path="{`/login/:url`}" component={Login} />

          <Route exact path="/:company" component={Home} />
          <Route exact path="{`/:company/:url`}" component={Home} />

          <Route exact path="/hr" component={HR} />

          <Redirect to="/" />


        </Switch>
      </Suspense>
    )
  }
}
export default App;