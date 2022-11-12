import React from "react";// импортируем реакт
import ReactDOM from 'react-dom/client';// импорт DO
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

