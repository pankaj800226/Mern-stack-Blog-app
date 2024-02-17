import { Link } from 'react-router-dom'
import img from '../assets/2.jpg'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.jpg'


const Home = () => {
  return (
    <>

      <div className='home_container'>
        <div className="home_text">
          <h1>Welcome to</h1>
          <p>My Blog App 😄</p>
          <p>Create by Pankaj kr.💁💖 </p>
          <Link to='/myblog'><button>My Blog😊</button></Link>
        </div>
        <div className="home_image">
          <img src={img} alt="" />
        </div>
      </div>
      {/* Blog page  */}
      <div className="blog_text">
        <h1>My Blog Page </h1>
      </div>
      <div className="blog_page">
        <div className="blog_image">
          <div className="blog_text">
            <img src={blog1} alt="" />
          </div>
        </div>

        <div className="blog_image">
          <div className="blog_text">
            <img src={blog2} alt="" />
          </div>
        </div>

        <div className="blog_image">
          <div className="blog_text">
            <img src={blog3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home