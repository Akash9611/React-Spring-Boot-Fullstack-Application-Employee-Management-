import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './shared/Layout'
import Home from './pages/Home'
import Employees from './pages/Employees'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="*" element={<h2 className='text-center'>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
