import Search from './Search'
import '../../assets/styles/components/filters/Filters.css'

const Filters = ({ onChange, query }) => {
  return (
    <section className='Filters'>
      <h2>Filters</h2>
      <Search onChange={onChange} query={query} />  
    </section>
  )
}

export default Filters
