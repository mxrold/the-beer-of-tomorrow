import DrinksItem from './DrinksItem'
import '../assets/styles/components/Drinks.css'

const Drinks = ({ data }) => {
  return (
    <section className="Drinks">
      {
        data.map(item => (
          <DrinksItem {...item} key={item.id} />
        ))
      }
    </section>
  )
}

export default Drinks