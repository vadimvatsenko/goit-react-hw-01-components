import React from "react";// импортируем реакт
import ReactDOM from "react-dom/client";// импорт DOM

const element = React.createElement(
  'div', {
    a: 5, b: 10,
  children: 'hello word',
  });// создается едемент div c пропсами, children: 'hello word'
console.log(element);

ReactDom.createRoot(element, document.querySelector('#root'));// рендер елемнта в root



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
