import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'

function App() {
  const [isActive, setIsActive] = useState(false)

  const handleDropDown = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="App">
      <div className="nav-wrapper">
        <Navbar isActive={isActive} handleDropDown={handleDropDown} />
      </div>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}
export default App
