import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import UsersIndex from './components/users_index'
import { fetchUsers } from './actions/user_actions'
import store from './store'
import './App.css';
window.fetchUsers = fetchUsers
window.store = store
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Route exact path='/' component={UsersIndex}/>
          </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
