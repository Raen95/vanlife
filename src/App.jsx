import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from "./components/About/About"
import Vans from "./components/Vans/Vans"
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import './server'

function App() {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App
