import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Experience } from './pages/Experience'
import { ProjectDisplay } from './pages/ProjectDisplay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        {/* navbar placed inside router so that it may use react router dom tools */}
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
