import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DefaultLayout } from './Screens/DefaultLayout';
import Home from './Screens/Home'
import './App.scss'

const loading = () => <div>Loading...</div>;
class App extends React.Component {
  render() {
    return(
      <Router>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/" render={props => <Home {...props}/>}/>
            <Route path="/" render={props => <DefaultLayout {...props} /> } />
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}
export default App;
