import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import { About } from './Pages/About'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'

function App() {
 

  return (
    <>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
          <Route path="/about" element={<About/>} />
          <Route path='/courses' element={<Courses/>}/>
         <Route path="/CourseDetail/:slug" element={<CourseDetail />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
