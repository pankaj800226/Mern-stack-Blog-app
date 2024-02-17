import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import toast from "react-hot-toast"
import { AiOutlineEdit } from 'react-icons/ai'


const Profile = () => {
    const [blogShow, setBlogShow] = useState([])

    //create a blog
    useEffect(() => {
        axios.post('http://localhost:8000/blogDispaly')
            .then((result) => setBlogShow(result.data))
            .catch((error) => console.log(error))
    }, [blogShow])

    //delete
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/delete/${id}`)
            .then(result => {
                console.log(result)
                toast.success("Blog deleted successfully!")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h1>Profile Page</h1>
            </div>

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
                                    <div className="btn_delete">
                                        <Link to={`/editBlog/${item._id}`}><button><AiOutlineEdit /></button></Link>
                                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Profile