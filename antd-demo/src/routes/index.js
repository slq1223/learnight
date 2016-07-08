import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import list from  '../gongdan/list1';
import list2 from '../gongdan2/list2';
import list3 from '../gongdan3/list3';
import list4 from '../gongdan4/list4';
import list5 from '../gongdan5/list5';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/actived" component={App} />
    <Route path="/completed" component={App} />
    <Route path="/list1" component={list} />
    <Route path="/list2" component={list2}/>
		<Route path="/list3" component={list3}/>
		<Route path="/list4" component={list4}/>
		<Route path="/list5" component={list5}/>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;




