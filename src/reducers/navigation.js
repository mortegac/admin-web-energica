import React from 'react';
import {
  FiMessageCircle,
  FiUser,
  FiHome,
  FiMapPin
} from 'react-icons/fi';

const initialState = [
  {
    title: '',
    items: [
      {
        url: '/inicio',
        icon: <FiHome size={20} />,
        title: 'Inicio',
        items: []
      },
    ]
  },
  {
    title: 'Modulos',
    items: [
       {
        url: '/noticias',
        icon: <FiMessageCircle size={20} />,
        title: 'Noticias',
        items: []
      },
        {
        url: '/usuarios',
        icon: <FiUser size={20} />,
        title: 'Usuarios',
        items: []
      },
      // {
      //   url: '/',
      //   icon: <FiCopy size={20} />,
      //   title: 'Noticias',
      //   badge: {
      //     color: 'bg-indigo-500 text-white',
      //     text: 7
      //   },
      //   items: [
      //     {
      //       url: '/contact-us-1',
      //       title: 'Nueva Noticia',
      //       items: []
      //     },
      //     {
      //       url: '/contact-us-1',
      //       title: 'Listado de Noticias',
      //       items: []
      //     },
      //     {
      //       url: '/subscribe',
      //       title: 'Pendientes de aprobación',
      //       items: []
      //     }
      //   ]
      // },
      // {
      //   url: '/',
      //   icon: <FiUser size={20} />,
      //   title: 'Usuarios',
      //   items: [
      //     {
      //       url: '/user-profile',
      //       title: 'Nuevo usuario',
      //       items: []
      //     },
      //     {
      //       url: '/social-feed',
      //       title: 'Roles',
      //       items: []
      //     }
      //   ]
      // },
    ]
  },
  {
    title: 'INFORMES',
    items: [
      {
        url: '/inicio',
        icon: <FiMapPin size={20} />,
        title: 'Trazabilidad usuarios',
        items: []
      },
    ]
  },
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
