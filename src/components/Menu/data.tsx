
import { IMenuDetail } from '../../interfaces/components';

export const menus = [
  {
    name: 'Home',
    path: '/',
    icon: '',
    scope: 'main',
    child: []
  },
  {
    name: 'About',
    path: '/about',
    icon: '',
    scope: 'main',
    child: []
  },
  {
    name: 'Products',
    path: '/products',
    icon: '',
    scope: 'main',
    child: [
      {
        name: 'Hot Product',
        path: '/products/hot',
        icon: '',
        scope: 'admin',
        child: []
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: '',
    scope: 'main',
    child: []
  }
] as IMenuDetail[]