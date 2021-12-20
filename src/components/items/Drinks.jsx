import DrinksItem from './DrinksItem'
import '../../assets/styles/components/items/Drinks.css'

const Drinks = ({ data }) => {
  return (
    <section className='Drinks'>
      {
        data.map(item => (
          <DrinksItem item={item} key={item.id} />
        ))
      }
    </section>
  )
}

export default Drinks
