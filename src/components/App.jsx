//===1

// import Painting from "./painting";

// import el from "../json/el.json";

// export default function App() {

//   const element = el.map(e => e);
  
//   return (
//     <div>
//     <Painting
//       imgUrl={el[0].url}
//       title={el[0].title}
//       authorUrl={el[0].author.url}
//       authorTag={el[0].author.tag}
//         price={el[0].price}
//         quantity ={el[0].quantity}
//       />
//       <Painting
//       imgUrl={el[1].url}
//       title={el[1].title}
//       authorUrl={el[1].author.url}
//       authorTag={el[1].author.tag}
//         price={el[1].price}
//         quantity ={el[1].quantity}
//       />
//       <Painting
//       imgUrl={el[2].url}
//       title={el[2].title}
//       authorUrl={el[2].author.url}
//       authorTag={el[2].author.tag}
//         price={el[2].price}
//         quantity ={el[2].quantity}
//       />
//       <Painting
//       imgUrl={el[3].url}
//       title={el[3].title}
//       authorUrl={el[3].author.url}
//       authorTag={el[3].author.tag}
//         price={el[3].price}
//         quantity ={el[3].quantity}
//       />
//       <Painting
//       imgUrl={el[4].url}
//       title={el[4].title}
//       authorUrl={el[4].author.url}
//       authorTag={el[4].author.tag}
//         price={el[4].price}
//         quantity ={el[4].quantity}
//       />



//   </div>
//   );
// }

//===2

// import Painting from "./painting";

// import el from "../json/el.json";

// export default function App() {

//   const element = el.map(e => e);
  
//   return (
//     <div>
//       [1,2,3,4,5]
//       {[1, 2, 3, 4, 5]}
//       {[1, 2, 3, 4, 5].map(e => <div>{ e}</div>)}


//   </div>
//   );
// }

//===3
// import Painting from "./painting";

// import el from "../json/el.json";

// export default function App() {
// return (
//     <div>
//       {el.map(el =>
//         <Painting
//           key={el.id}
//           imgUrl={el.url}
//           title={el.title}
//           authorUrl={el.author.url}
//           authorTag={el.author.tag}
//           price={el.price}
//           quantity={el.quantity}
//         />)}
//     </div>

//   )
// }

//===4
import Painting from "./painting";

import el from "../json/el.json";

import PropTypes from 'prop-types';

import PaintingList from "./paintingList";



export default function App() {
  
return (
  <div>
    <PaintingList el={painting } />
    </div>

  )
}









// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
