import Painting from "./painting";
import el from "./json/el.json";

export default function App() {
  return (
    <div>
    <Painting
      url={el.url}
      title={el.title}
      authorUrl={el.author.url}
      authorTag={el.author.tag}
      price={el.price}
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
