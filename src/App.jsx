import './App.css'

import { useState } from 'react'


// components
import Navbar from './components/Navbar'
import DropdownMenu from './components/DropdownMenu'

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
        {/* Your content here */}
      </div>
    </div>
  )
}
export default App
