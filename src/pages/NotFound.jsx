import Button from '../components/global/Button'
import '../assets/styles/pages/NotFound.css'

const NotFound = () => {
  return (
    <section className='NotFound container-padding container-margin'>
      <h1>Oops! We couldn't find this page 🤯</h1>
      <Button path='/' text='Go back' type='primary' />
    </section>
  )
}

export default NotFound
