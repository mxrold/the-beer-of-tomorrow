import { NavLink } from 'react-router-dom'
import '../assets/styles/components/Links.css'

const Links = ({ type = '', url = '', text = '' }) => {
  return (
    <NavLink className={`Links Links__${type}`} to={url} key={text}>
      {text}
    </NavLink>
  )
}

export default Links