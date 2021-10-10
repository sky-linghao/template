import React, { Component, Suspense, lazy, Fragment } from 'react';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
/*
 Api 简介
 Route : 用来配置路由线路
 Switch : 只显示匹配到的第一个
*/

//引入方法一
import Home from './views/Home'
/*
  引入方法二（优化）
  const Home = lazy(()=>import('./View/Home'))
*/
class App extends Component {
  render() {
    return (
      <Suspense fallback="dd">
        <Switch fallback={<div>Loading...</div>}>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    )
  }
}
export default App;