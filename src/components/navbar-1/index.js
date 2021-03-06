import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {FiMenu} from 'react-icons/fi';
// import {FiSettings, FiMenu} from 'react-icons/fi';
import Dropdown3 from './dropdown-3';
import Dropdown5 from './dropdown-5';
import Search from './search';
import '../../css/components/navbar.css';

const Navbar = () => {
  const {config} = useSelector(
    state => ({
      config: state.config
    }),
    shallowEqual
  )
  let {collapsed} = { ...config }
  // let {rightSidebar, collapsed} = { ...config }
  const dispatch = useDispatch()
  return (
    <div className="navbar navbar-1 border-b pr-3">
      <div className="navbar-inner w-full flex items-center justify-start">
        <button
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'collapsed',
              value: !collapsed
            })
          }
          className="mx-4">
          <FiMenu size={20} />
        </button>
        <Search />
        <span className="ml-auto"></span>
        <Dropdown3 />
        <Dropdown5 />
        {/* <button
          className="btn-transparent flex items-center justify-center h-16 w-8 mx-4"
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'rightSidebar',
              value: !rightSidebar
            })
          }>
          <FiSettings size={18} />
        </button> */}
      </div>
    </div>
  )
}

export default Navbar
