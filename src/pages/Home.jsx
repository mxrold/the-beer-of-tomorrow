import { data } from '../initialState'
import Filters from '../components/Filters'
import Drinks from '../components/Drinks'
import '../assets/styles/pages/Home.css'

const Home = () => {
  return (
    <main className="Home container-padding container-margin"> 
      <h1>Featured products</h1>
      <div className="Home__container container-width">
        <Filters />
        <Drinks data={data} />   
      </div>
    </main>
  )
}
 
export default Home
