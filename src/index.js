import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider'
import App from './App';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Router>
        <StoreContext.Provider value={store}>
        <ThemeProvider>
          <App state={state} />
        </ThemeProvider>
        </StoreContext.Provider>
      </Router>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);