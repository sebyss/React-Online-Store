import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Products from '../pages/Products'
import Home from '../pages/Home'
import AppRoute from './AppRoute'

const Routes = () => (
  <Router>
    <Switch>
      <AppRoute path="/" exact={true} component={Home} />
      <AppRoute path="/products" exact={true} component={Products} />
    </Switch>
  </Router>
)

export default Routes
