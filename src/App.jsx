import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'

function App() {
 

  return (
    <>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
