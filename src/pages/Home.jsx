import { useGetData } from '../hooks/useGetData'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
/* Fake data */
// import { data } from '../initialState'
import Filters from '../components/Filters'
import Drinks from '../components/Drinks'
import Loader from '../components/Loader'
import LoadingError from '../components/LoadingError'
import ButtonHome from '../components/ButtonHome'
import '../assets/styles/pages/Home.css'

const Home = () => {
  const idPath = 'home'
  const { countPages, ref } = useInfinityScroll()
  const url = `https://api.punkapi.com/v2/beers?page=${countPages}&per_page=12`
  const { data, error, loading } = useGetData(url, countPages)

  return (
    <main id={idPath} className="Home container-padding container-margin"> 
      <h1>Featured products</h1>
      <div className="Home__container container-width">
        <Filters />
        <div className="Home__container--data">
          <Drinks data={data} />   
          <div className='Observer' ref={ref} />
          <ButtonHome path={idPath} countPages={countPages} />
          <LoadingError error={error} />
          <Loader items={6} loading={loading} />
        </div>
      </div>
    </main>
  )
}
 
export default Home
