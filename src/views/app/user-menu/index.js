import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Add = React.lazy(() => import(/* webpackChunkName: "add" */ './add'));
const List = React.lazy(() => import(/* webpackChunkName: "list" */ './list'));
const Update = React.lazy(() =>
  import(/* webpackChunkName: "update" */ './update')
);

const UserMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route path={`${match.url}/add`} render={(props) => <Add {...props} />} />
      <Route
        path={`${match.url}/list`}
        render={(props) => <List {...props} />}
      />
      <Route
        path={`${match.url}/update`}
        render={(props) => <Update {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UserMenu;
