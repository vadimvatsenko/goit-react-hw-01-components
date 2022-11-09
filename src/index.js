// import React from "react";// импортируем реакт
import ReactDOM from 'react-dom/client';// импорт DOM

// если в файле есть jsx то react не нужно импортировать
//=== 1
// const el1 = React.createElement('span', { children: 'Hello' });
// const el2 = React.createElement('span', { children: 'world' });


// const element = React.createElement(
//   'div', {
//     a: 5, b: 10,
//   children: [el1, ' ', el2]
  
//   });// создается едемент div c пропсами, children: 'hello word'
// console.log(element);

// ReactDOM.createRoot(document.getElementById('root')).render(element);// рендер елемнта в root

//===2


// const el1 = <span>Hello</span>
// const el2 = <span>World</span>


// const jsxEl = <div>
//   {2+2}
//   {el1}
//   {el2}
// </div>;

// console.log(jsxEl);

// ReactDOM.createRoot(document.getElementById('root')).render(jsxEl);
//===3

// const data = {
//   id: 'id-1',
//   url: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/03/df/52/03df522a-dd65-bf79-ea1d-bed8e4204e0b/AppIcon1-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
//   title: 'Sonic',
//   price: '10',
//   author: {
//     tag: "Sonic Khaotic",
//     url: "https://upload.wikimedia.org/wikipedia/en/0/06/Knuckles_the_Echidna.png"
//   },
//   quantity: 100,
// };

// const paiting = (
// <div>
//     <img src={data.url} alt={ data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>Автор: <a href={ data.author.url }>{ data.author.tag}</a></p>
//   <p>Цена: {data.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
//   </div>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(paiting)

//===4

//webpack прасит автоматом json

// import el from "./json/el.json";

// const data = el[0];
// console.log(data);


// const paiting = (
// <div>
//     <img src={data.url} alt={ data.title} width="200" />
//     <h2>{data.title}</h2>
//     <p>Автор: <a href={ data.author.url }>{ data.author.tag}</a></p>
//   <p>Цена: {data.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
//   </div>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(paiting);

//===5
import el from "./json/el.json";


// функция с большой буквы, потому что jsx аонимает маленкую как строку
function Painting(props) {
  console.log(props);
  return  <div>
    <img src={ props.url } alt={ props.title} width="200" />
    <h2>{props.title}</h2>
    <p>Автор: <a href={ props.authorUrl }>{ data.author.tag}</a></p>
  <p>Цена: {props.price} кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
  </div>
}

const data = el[0]

//пропсы передаются в функцию выше
ReactDOM.createRoot(document.getElementById('root'))
  .render(<Painting
    url={data.url}
    title={data.title}
    authorUrl={data.author.url}
    authorTag={data.author.tag}
    price={data.price}
  />);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
