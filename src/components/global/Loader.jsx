import { useState, useEffect } from 'react'
import '../../assets/styles/components/items/Drinks.css'
import '../../assets/styles/components/global/Loader.css'

const Loader = ({ items, loading }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const array = []
    for (let i = 0; i < items; i++) {
      array.push(i)
    }

    setCards(array)
  }, [])

  return (
    <>
      <div className='Loader Drinks container-width'>
        {
          cards.map((item, index) => (
            <div className='Loader__item' key={index}>
              <div className='Loader__item--color' />
            </div>
          ))
          }
      </div>
    </>
  )
}

export default Loader
