import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { About } from "./Pages/About";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Blog from "./Components/Blog-Page/Blog";
import { SinglePost } from "./Components/Blog-Page/SinglePost";
import Error from "./Components/Blog-Page/Error";
import { ContactUsPage } from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/CourseDetail/:slug" element={<CourseDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
