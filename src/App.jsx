import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import AboutUs from './pages/aboutUs/aboutUs'
import Yachts from './pages/yachts/yachts'
import Detail from './pages/detail/detail'
import NotFound from './pages/not-found'
import Jetskies from './pages/jetskies/jetskies'
import Transportation from './pages/transportation/transportation'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='about-us'
          element={<AboutUs />}
        />
        <Route
          path='detail/:category/:name'
          element={<Detail />}
        />
        <Route
          path='yachts'
          element={<Yachts />}
        />
        <Route
          path='jetskies'
          element={<Jetskies />}
        />
        <Route
          path='transportation'
          element={<Transportation />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
