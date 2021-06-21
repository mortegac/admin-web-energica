import React from 'react';
import Loader from '../../components/loader';
import '../../css/layouts/layout-1.css';

const LayoutLogin = ({children}) => {

  return (
    <div>
      <Loader />
      <div className="wrapper">
        <div className="main w-full text-grey-900 dark:bg-grey-900 dark:text-white">
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default LayoutLogin
