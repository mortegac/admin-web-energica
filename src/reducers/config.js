export default function config(
  state = {
    name: 'Comunidad',
    description: 'Energica City',
    url: 'https://holaComunidad.cl',
    layout: 'layout-1',
    collapsed: true,
    rightSidebar: false,
    backdrop: false
  },
  action
) {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        ...action.config
      }
    case 'SET_CONFIG_KEY':{
      const {key, value} = {...action}
      return {
        ...state,
        [`${key}`]: value
      }}
    default:
      return state
  }
}
