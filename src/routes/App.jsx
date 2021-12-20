import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  Home,
  Checkout,
  NotFound,
  DrinkDetails,
  Contact,
  Blog,
  HowToBuy,
  OurHistory,
  Payment,
  Refunds,
  Shipping,
  AboutUs
} from '../pages'
import Layout from '../components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/shop-:id' element={<DrinkDetails />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/how-to-buy' element={<HowToBuy />} />
          <Route exact path='/our-history' element={<OurHistory />} />
          <Route exact path='/payment' element={<Payment />} />
          <Route exact path='/refunds' element={<Refunds />} />
          <Route exact path='/shipping' element={<Shipping />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/shop/' element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
