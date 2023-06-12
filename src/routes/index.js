import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Page404 from '../pages/Page404'
import Posts from '../pages/Posts'
import User from '../pages/Users'
import UserEdit from '../pages/UserEdit'

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/login" component={Login} isClosed={false} />
      <PrivateRoute exact path="/register" component={Register} isClosed={false} />
      <PrivateRoute exact path="/" component={Posts} isClosed />
      <PrivateRoute exact path="/user" component={User} isClosed />
      <PrivateRoute exact path="/user/edit" component={UserEdit} isClosed />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  )
}