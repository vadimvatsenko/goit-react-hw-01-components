import Painting from "./painting";
import PropTypes from 'prop-types'

export default function PaintingList({ el }) {
    return (<ul>
    {el.map(el => (
        <li key={el.id}>
        <Painting
          
          imgUrl={el.url}
          title={el.title}
          authorUrl={el.authorUrl}
          authorTag={el.authorTag}
          price={el.price}
          quantity={el.quantity}
        />
      </li>
    )
    )}
    </ul>
    )
}



PaintingList.PropTypes = {
  el: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
}