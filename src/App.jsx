import { BrowserRouter, Routes, Route } from "react-router-dom"
import './server'
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/VanDetail/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host/HostVans"
import HostVansDetail from "./pages/Host/HostVansDetail"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanInfo from "./pages/Host/HostVanInfo"
import Login from "./pages/Login/Login"
import PageNotFound from "./pages/404"
import AuthLayout from "./components/AuthLayout"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="/login" element={<Login />} />

              <Route path="about" element={<About />} />

              <Route path="vans">
                <Route index element={<Vans />} />
                <Route path=":id" element={<VanDetail />} />
              </Route>

              <Route element={<AuthLayout /> }>
                <Route path="host" element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="vans" element={<HostVans />} />

                  <Route path="vans/:id" element={<HostVansDetail />}>
                    <Route index element={<HostVanInfo />} />
                    <Route path="pricing" element={<HostVanPricing />} />
                    <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
                </Route>
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
