import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state.js';
import state from './redux/state.js';

import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App appState={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

