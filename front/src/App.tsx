import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Context from './context/Context';
import { appGlobalInfo } from './appInfo/appGlobalInfo';
import router from './router/router';
import store from './store/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Context.Provider value={appGlobalInfo}>
        <RouterProvider router={router} />
      </Context.Provider>
    </Provider>
  );
}

export default App;
