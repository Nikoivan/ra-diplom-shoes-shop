import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import BosaNoga from './components/BosaNoga/BosaNoga';
import Context from './context/Context';
import { appGlobalInfo } from './appInfo/appGlobalInfo';
import './App.css';
import Index from './components/Main/Index/Index';
import Catalog from './components/Main/Catalog/Catalog';
import About from './components/Main/About/About';
import Contacts from './components/Main/Contacts/Contacts';
import Cart from './components/Main/Cart/Cart';
import Component404 from './components/Main/404/404';
import Product from './components/Product/Product';
import Search from './components/Search/Search';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
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

  return (
    <Provider store={store}>
      <Context.Provider value={appGlobalInfo}>
        <RouterProvider router={router} />
      </Context.Provider>
    </Provider>
  );
}

export default App;

