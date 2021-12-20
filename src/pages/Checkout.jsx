import { useGetDataLocalStorage } from '../hooks/useGetDataLocalStorage'
/* Fake data */
// import { data } from '../initialState'
import { sumTotal } from '../utils/sumTotal'
import CheckoutItem from '../components/CheckoutItem'
import Button from '../components/Button'
import '../assets/styles/pages/Checkout.css'

const Checkout = () => {
  const key = 'DRINK_'
  const [list] = useGetDataLocalStorage(key)
  const total = sumTotal(list)

  return (
    <section className="Checkout container-padding container-margin">
      {
        list.length === 0
        ? <h2>You don't have any drinks in the cart 🙈. Lets go buy!</h2>
        : <div className="Checkout__container container-width">
            <CheckoutItem data={list} />
            {
              total !== 0 &&
              <div className="Checkout__container--total">
                <div className="Checkout__container--total-text">
                  <h2>Total: </h2>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="Checkout__container--total-buy">
                  <Button path='/purchase' text='Buy now' type='primary' />
                </div>
              </div>
            }
          </div>
      }
    </section>
  )
}

export default Checkout
