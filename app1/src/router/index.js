export const staticRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
]

export const asyncRoutes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]