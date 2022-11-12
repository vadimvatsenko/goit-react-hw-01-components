
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


