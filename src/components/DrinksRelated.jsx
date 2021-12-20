import { useSeveralData } from '../hooks/useSeveralData'
import Drinks from '../components/Drinks'
import LoadingError from '../components/LoadingError'
import '../assets/styles/components/DrinksRelated.css'

const DrinksRelated = () => {
  const url = 'https://api.punkapi.com/v2/beers/random'
  const { data, error, loading } = useSeveralData(url, 6)

  if (loading) return <h2>...Loading</h2>
  if (error) return <LoadingError error={error} />

  return (
    <div className='DrinksRelated'>
      <h2>Related drinks</h2>
      <Drinks data={data} />
    </div>
  )
}

export default DrinksRelated
