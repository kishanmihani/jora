import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from './redux/reducers/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrimeReactProvider >
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
       </PrimeReactProvider>
  </React.StrictMode>
);
reportWebVitals();
