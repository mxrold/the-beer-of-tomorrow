import BasketButton from './BasketButton'
import ToggleItem from './ToggleItem'
import '../assets/styles/components/CheckoutItem.css'

const CheckoutItem = ({ data }) => {
  return (
    <>
      {
        data.map(item =>  (
          <article className="CheckoutItem" key={item.id}>
            <div className="CheckoutItem__data">
              <figure className="CheckoutItem__data--image">
                <img src={item.image_url} alt={item.name} title={item.name} loading="lazy" />
              </figure>
              <div className="CheckoutItem__data--text"> 
                <h2>{item.name}</h2>
                <p>${item.abv}</p>
              </div>
            </div>
            <ToggleItem />
            <div className="CheckoutItem__price">
              <p>${item.abv}</p>
            </div>
            <BasketButton id={item.id} name={item.name} item={item} />
          </article>
        ))
      }
    </>
  )
}

export default CheckoutItem