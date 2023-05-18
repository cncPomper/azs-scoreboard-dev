import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewWindow from 'react-new-window'
import Panel from './panel.js'
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <NewWindow>
      <Panel/>
    </NewWindow> */}
  </React.StrictMode>
);
reportWebVitals();
