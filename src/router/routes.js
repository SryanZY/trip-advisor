export default [
  {
    path: '/',
    redirect: '/tour'
  },
  {
    path: '/tour',
    component: () => import('../components/tour/tour')
  },
  {
    path: '/hotels',
    component: () => import('../components/hotels/hotels')
  },
  {
    path: '/trains',
    component: () => import('../components/trains/trains')
  },
  {
    path: '/vehicles',
    component: () => import('../components/vehicles/vehicles')
  }
]
