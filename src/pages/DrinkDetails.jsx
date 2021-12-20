import { useParams } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import DrinksRelated from '../components/items/DrinksRelated'
import LoaderSecondary from '../components/global/LoaderSecondary'
import LoadingError from '../components/global/LoadingError'
import { GiHops } from 'react-icons/gi'
import '../assets/styles/pages/DrinkDetails.css'

const DrinkDetails = () => {
  const { id } = useParams()
  const url = `https://api.punkapi.com/v2/beers/${id}`
  const { data, error, loading } = useGetData(url)
  const item = data[0]

  const handleList = list => {
    if (list.length > 0) {
      return list.map((item, index) => (
        <li key={`${item.name}-${index}`}>{item.name}</li>
      ))
    }
    return <li />
  }

  if (loading) return <LoaderSecondary />
  if (error) return <LoadingError error={error} />

  return (
    <section className='DrinkDetails container-padding container-margin'>
      {
        !loading && item !== undefined &&
          <div className='DrinkDetails__container container-width'>
            <div className='DrinkDetails__container--item'>
              <div className='DrinkDetails__container--item-data'>
                <h1>{item.name}</h1>
                <p>{item.tagline}</p>
                <h3><GiHops size='18px' color='#ae304f' /> Ingredients</h3>
                <ul className='DrinkDetails__container--item-data-list'>
                  {handleList(item.ingredients.malt)}
                  {handleList(item.ingredients.hops)}
                </ul>
              </div>
              <div className='DrinkDetails__container--item-image'>
                <figure>
                  <img src={item.image_url} alt={item.name} title={item.name} loading='lazy' />
                </figure>
              </div>
            </div>
            <div className='DrinkDetails__container--description'>
              <div className='DrinkDetails__container--description-text'>
                <h3>Description</h3>
                <p>{item.description}</p>
              </div>
              <div className='DrinkDetails__container--description-text'>
                <h3>Brewer tips</h3>
                <p>{item.brewers_tips}</p>
              </div>
            </div>
          </div>
      }
      <DrinksRelated />
    </section>
  )
}

export default DrinkDetails
