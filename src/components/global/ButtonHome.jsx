import { useViewportWidth } from '../../hooks/useViewportWidth'
import { IoMdArrowRoundUp } from 'react-icons/io'
import '../../assets/styles/components/global/ButtonHome.css'

const ButtonHome = ({ path, countPages }) => {
  const minWidth = 1020
  const [isMobile] = useViewportWidth(minWidth)

  return (
    <>
      {
        isMobile && countPages > 2 &&
          <div className='ButtonHome'>
            <a href={`#${path}`} className='ButtonHome__button'>
              <IoMdArrowRoundUp />
            </a>
          </div>
      }
    </>
  )
}

export default ButtonHome
