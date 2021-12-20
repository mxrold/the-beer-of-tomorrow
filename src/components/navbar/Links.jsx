import { NavLink } from 'react-router-dom'
import '../../assets/styles/components/navbar/Links.css'

const Links = ({ url = '', text = '' }) => {
  return (
    <NavLink className='Links' to={url} key={text}>
      {text}
    </NavLink>
  )
}

export default Links
