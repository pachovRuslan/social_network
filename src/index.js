import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore.js';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider'
import App from './App';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
        </Provider>
      </Router>
    </React.StrictMode>
  );

