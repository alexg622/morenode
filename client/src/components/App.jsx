import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersIndexContainer from './users_index_container'

const App = () => (
  <div>
      <Switch>
        <Route exact path="/" component={UsersIndexContainer}/>
      </Switch>
  </div>
);

export default App;
