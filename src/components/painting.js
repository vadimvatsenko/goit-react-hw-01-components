import defaultImg from './default.webp'// импорт картинки по умолчанию
import PropTypes from 'prop-types';

//компоненты
export default function Painting(props) {
  //или function Painting({url, title, authorUrl, authorTag, price})
  const {imgUrl = defaultImg , title, authorUrl, authorTag = "не известно", price} = props

  return ( <div>
    <img src={ imgUrl } alt={ title} width="200" />
    <h2>{title}</h2>
    <p>Автор: <a href={ authorUrl }>{ authorTag}</a></p>
  <p>Цена: {price} кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
    </div>
  )
}

//ПротоТипы, что бы проверять данные на тип
Painting.protoTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  authorUrl: PropTypes.string,
  authorTag: PropTypes.string,//pts
  price: PropTypes.number//pts 

}


//если стрелочная функция 
//  const Painting = (props) => {
//   //или function Painting({url, title, authorUrl, authorTag, price})
//   const {url, title, authorUrl, authorTag, price} = props

//   return ( <div>
//     <img src={ url } alt={ title} width="200" />
//     <h2>{title}</h2>
//     <p>Автор: <a href={ authorUrl }>{ authorTag}</a></p>
//   <p>Цена: {price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
//     </div>
//   )
// }

// export default Painting;