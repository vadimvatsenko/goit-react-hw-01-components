import Painting from "./painting";

import el from "../json/el.json";

export default function App() {
  return (
    <div>
    <Painting
      imgUrl={el[0].url}
      title={el[0].title}
      authorUrl={el[0].author.url}
      authorTag={el[0].author.tag}
      price={el[0].price}
      />
      <Painting
      imgUrl={el[1].url}
      title={el[1].title}
      authorUrl={el[1].author.url}
      authorTag={el[1].author.tag}
      price={el[1].price}
      />
      <Painting
      imgUrl={el[2].url}
      title={el[2].title}
      authorUrl={el[2].author.url}
      authorTag={el[2].author.tag}
      price={el[2].price}
      />
      <Painting
      imgUrl={el[3].url}
      title={el[3].title}
      authorUrl={el[3].author.url}
      authorTag={el[3].author.tag}
      price={el[3].price}
      />
      <Painting
      imgUrl={el[4].url}
      title={el[4].title}
      authorUrl={el[4].author.url}
      authorTag={el[4].author.tag}
      price={el[4].price}
      />



  </div>
  );
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
