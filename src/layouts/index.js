import React from 'react';
import {useLocation} from 'react-router-dom';
import LayoutLogin from './layoutLogin';
import Empty from './empty';
import Layout1 from './layout-1';
const Layouts = ({children}) => {
  let location = useLocation()
  let {pathname} = { ...location }
  if (
    [
      '/',
      '/forgot-password',
    ].includes(pathname)
  ) {
    return <LayoutLogin>{children}</LayoutLogin>
  } else if (['/pages/logout', '/login-2', '/login-3'].includes(pathname)){
    return <Empty>{children}</Empty>
  }else {
    return <Layout1>{children}</Layout1>
  // } else {
  //   return <Empty>{children}</Empty>
  }
}

export default Layouts
