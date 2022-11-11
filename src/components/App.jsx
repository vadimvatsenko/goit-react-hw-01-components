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
// key 
// import Painting from "./painting";
import PaintingList from "./paintingList";
import el from "../json/el.json";
import Section from "./Section";

export default function App() {
  return (
    <div>
      <PaintingList items={el} />
      <Section title={'TOP SEGA GAMES'} />
      <Section title={'TOP NES GAMES'} />
      <Section />
      <Section title={'TOP PS1 GAMES'}>
        1213132131321
      </Section>
      <Section title={'TOP PS2 GAMES'}>
        <PaintingList items={el} />
        <PaintingList items={el} />
        <PaintingList items={el} />
      </Section>
    </div>

  )
}

//CNTR+D

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
