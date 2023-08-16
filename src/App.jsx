import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail/VanDetail"
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import './server'

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
