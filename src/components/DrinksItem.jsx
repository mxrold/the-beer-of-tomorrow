import { Link } from 'react-router-dom'
import BasketButton from './BasketButton'
import '../assets/styles/components/DrinksItem.css'

const DrinksItem = ({ id, name, image_url, abv }) => {
  return (
    <article className="DrinksItem">
      <h3 className="DrinksItem__name">{name}</h3>
      <figure className="DrinksItem__image">
        <img src={image_url} alt={name} loading="lazy" />
      </figure>
      <p className="DrinksItem__price">${abv}</p>
      <span className="DrinksItem__layout"></span>
      <BasketButton />
      <Link className="DrinksItem__link" to={`/shop-${id}`} title={name}></Link>
    </article>
  )
}

export default DrinksItem