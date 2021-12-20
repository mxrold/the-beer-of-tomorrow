import { Link } from 'react-router-dom'
import BasketButton from '../global/BasketButton'
import '../../assets/styles/components/items/DrinksItem.css'

const DrinksItem = ({ item }) => {
  return (
    <article className='DrinksItem'>
      <h3 className='DrinksItem__name'>{item.name}</h3>
      <figure className='DrinksItem__image'>
        <img src={item.image_url} alt={item.name} loading='lazy' />
      </figure>
      <p className='DrinksItem__price'>${item.abv}</p>
      <span className='DrinksItem__layout' />
      <BasketButton id={item.id} name={item.name} item={item} />
      <Link className='DrinksItem__link' to={`/shop-${item.id}`} title={item.name}></Link>
    </article>
  )
}

export default DrinksItem
