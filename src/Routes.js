import React from 'react'
import {Switch, Route} from 'react-router-dom'

import EmptyPage from './pages/empty-page'
import LoginPage from './pages/loginPage'
import ForgotPasswordPage from './pages/forgotPasswordPage'
import Logout from'./pages/logout';
import DashboardPage from'./pages/dashboardPage';
import NewsPage from'./pages/newsPage';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/forgot-password" component={ForgotPasswordPage} />
      <Route exact path="/pages/logout" component={Logout} />
      <Route exact path="/inicio" component={DashboardPage} />
      <Route exact path="/noticias" component={NewsPage} />
      {/* <Route exact path="/usuarios" component={dashboardPage} />
      <Route exact path="/trazabilidad" component={dashboardPage} /> */}

      <Route component={EmptyPage} />
    </Switch>
  )
}
export default Routes;
