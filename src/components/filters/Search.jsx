import { AiOutlineSearch } from 'react-icons/ai'
import '../../assets/styles/components/filters/Search.css'

const Search = ({ onChange, query }) => {
  return (
    <div className='Search'>
      <input
        className='Search__input'
        type='text'
        placeholder='Search drinks by name'
        value={query}
        onChange={onChange}
      />
      <AiOutlineSearch />
    </div>
  )
}

export default Search