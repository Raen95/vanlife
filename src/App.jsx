import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App
