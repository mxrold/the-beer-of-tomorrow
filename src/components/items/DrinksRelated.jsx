import { useSeveralData } from '../../hooks/useSeveralData'
import Drinks from './Drinks'
import LoaderSecondary from '../global/LoaderSecondary'
import LoadingError from '../global/LoadingError'
import '../../assets/styles/components/items/DrinksRelated.css'

const DrinksRelated = () => {
  const url = 'https://api.punkapi.com/v2/beers/random'
  const { data, error, loading } = useSeveralData(url, 6)

  if (loading) return <LoaderSecondary />
  if (error) return <LoadingError error={error} />

  return (
    <div className='DrinksRelated'>
      <h2>Related drinks</h2>
      <Drinks data={data} />
    </div>
  )
}

export default DrinksRelated
