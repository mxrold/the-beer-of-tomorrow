import { useGetData } from '../hooks/useGetData'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
/* Fake data */
// import { data } from '../initialState'
import Filters from '../components/Filters'
import Drinks from '../components/Drinks'
import '../assets/styles/pages/Home.css'

const Home = () => {
  const { countPages, ref } = useInfinityScroll()
  const url = `https://api.punkapi.com/v2/beers?page=${countPages}&per_page=12`
  const { data, error, loading } = useGetData(url, countPages)

  return (
    <main className="Home container-padding container-margin"> 
      <h1>Featured products</h1>
      <div className="Home__container container-width">
        <Filters />
        {loading && <h2>...Loading</h2>}
        <Drinks data={data} />   
      </div>
      <div className='Observer' ref={ref} />
    </main>
  )
}
 
export default Home
