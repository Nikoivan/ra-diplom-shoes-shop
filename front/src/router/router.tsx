import { createBrowserRouter } from 'react-router-dom';
import BosaNoga from '../components/BosaNoga/BosaNoga';

import Index from '../components/Main/Index/Index';
import Catalog from '../components/Main/Catalog/Catalog';
import Search from '../components/Search/Search';
import Product from '../components/Product/Product';
import About from '../components/Main/About/About';
import Contacts from '../components/Main/Contacts/Contacts';
import Cart from '../components/Main/Cart/Cart';
import Component404 from '../components/Main/404/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BosaNoga />,
    children: [
      { path: '', element: <Index /> },
      {
        path: 'catalog',
        element: <Catalog />,
        children: [
          {
            path: '',
            element: <Search />,
          },
        ],
      },
      { path: 'catalog/:id', element: <Product /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        element: <Component404 />,
      },
    ],
  },
]);

export default router;
