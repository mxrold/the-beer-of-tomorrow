import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Checkout, NotFound, DrinkItem, Contact } from '../pages'
import Layout from '../components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/shop/:id' element={<DrinkItem />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/shop/' element={<Navigate to="/" />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
