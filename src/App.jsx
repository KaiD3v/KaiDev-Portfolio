import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import MiniBlog from './pages/projects/MiniBlog/MiniBlog'
import IjatuMystery from './pages/works/IjatuMystery/IjatuMystery'
import ThriftStoreManager from './pages/works/ThriftStoreManager/ThriftStoreManager'
import ReactGram from './pages/projects/ReactGram/ReactGram'
import MyRepos from './pages/projects/MyRepos/MyRepos'

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
            {/* Home Page */}
            <Route path='/' element={<Home />} />

            {/* Projects Routes */}
            <Route path='/projects/mini-blog' element={<MiniBlog />} />
            <Route path='/projects/reactgram' element={<ReactGram />} />
            <Route path='/projects/my-repos' element={<MyRepos />} />
            
            {/* Works Routes */}
            <Route path='/works/ijatu-mystery-rpg' element={<IjatuMystery />} />
            <Route path='/works/thrift-store-manager' element={<ThriftStoreManager />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}
export default App
