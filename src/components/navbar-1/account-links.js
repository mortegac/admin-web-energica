import React from 'react'
import {useHistory, Link} from 'react-router-dom'

import {FiUser, FiLogIn} from 'react-icons/fi'
import Amplify, { Auth } from 'aws-amplify'
import config from '../../aws-exports'
Amplify.configure(config)

const AccountLinks = () => {
  const history = useHistory();
  const handlerSigOut = async () => {

    try {
      await Auth.signOut();
      history.push('/')

    } catch (error) {
      console.log('--ERROR--', error);
    }

  };


  const items = [
    {
      url: '/extras/user-profile',
      icon: <FiUser size={18} className="stroke-current" />,
      name: 'Profile',
      badge: null
    },
    // {
    //   url: '/pages/logout',
    //   icon: <FiLogIn size={18} className="stroke-current" />,
    //   name: 'Logout',
    //   badge: null
    // }
  ]

  return (
    <div className="flex flex-col w-full">
      <ul className="list-none">
        {items.map((item, i) => (
          <li key={i} className="dropdown-item">
            <Link
              to={item.url}
              className="flex flex-row items-center justify-start h-10 w-full px-2">
              {item.icon}
              <span className="mx-2">{item.name}</span>
              {item.badge && (
                <span
                    className={`uppercase font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 inline-flex items-center justify-center rounded-full ${item.badge.color} ml-auto`}>
                  {item.badge.number}
                </span>
              )}
            </Link>
          </li>
        ))}
        <li key="LOGOUT002" className="dropdown-item">
          <a href="" onClick={ ()=>handlerSigOut() } className="flex flex-row items-center justify-start h-10 w-full px-2">
            <FiLogIn size={18} className="stroke-current" />
            <span className="mx-2">Salir</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AccountLinks
