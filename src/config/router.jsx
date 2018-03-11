import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';

export default () => (
  <Router>
    <div>
      <Link to="/">首页</Link>
      <Link to="/detail">详情页</Link>
      <Route path="/" render={() => <Redirect to="/list" />} exact />
      <Route path="/list" component={TopicList}/>
      <Route path="/detail" component={TopicDetail} />
    </div>
  </Router>
);
