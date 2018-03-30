// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../components/common/loader'


export default [
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import('./pages/login'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import('./pages/register'),
      loading: LoadingComponent,
    }),
  },
]