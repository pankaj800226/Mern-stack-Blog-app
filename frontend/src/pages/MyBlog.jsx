import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const MyBlog = () => {
  const [blogShow, setBlogShow] = useState([])

  //read write a blog and show display 
  useEffect(() => {
    axios.post('http://localhost:8000/blogDispaly')
      .then((result) => setBlogShow(result.data))
      .catch((error) => console.log(error))
  }, [blogShow])

  return (
    <>

      <div className="flex_blog_data">
        {
          blogShow.length == 0
            ?
            <div><h2 style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80vh" }}>Blog not found</h2></div>
            :
            blogShow.map((item) => {
              return (
                <div key={item.id} className="blogContainer">

                  <Link to={`/allBlog/${item._id}`}><img src={item.image} alt="image" /></Link>
                  <p>Name : {item.name}</p>
                  <p>Place : {item.city}</p>
                  <p>Date : {item.date}</p>
                  {/* <p>Decr : {item.Description}</p> */}

                </div>
              )
            })
        }
      </div>
    </>
  )
}

export default MyBlog