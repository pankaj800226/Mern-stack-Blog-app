import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from 'react-hot-toast'
import Home from "./pages/Home"
import AddBlog from "./pages/AddBlog";
import Header from './components/Header'
import MyBlog from "./pages/MyBlog";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import AllBlogData from "./pages/AllBlogData";

//styles
import './styles/header.scss'
import './styles/home.scss'
import './styles/addBlog.scss'
import './styles/myblog.scss'
import './styles/footer.scss'
import './styles/allBlogData.scss'
import EditBlog from "./pages/EditBlog";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddBlog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myblog" element={<MyBlog />} />
          <Route path="/allBlog/:id" element={<AllBlogData />} />
          <Route path="/editBlog/:id" element={<EditBlog />} />


        </Routes>
        <Toaster />
      </Router>
      <Footer />
    </>
  )
}

export default App