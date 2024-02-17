import { useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
const EditBlog = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [Description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const { id } = useParams()

    const navigate = useNavigate()

    const submithandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/edit/' + id, {
            name, city, Description, image
        }).then((result) => (result.data))
            .catch((error) => console.log(error))
            navigate('/myblog')
            toast.success('Updated successfully')

    }

    // const [allBlogData, setAllBlogData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/AllBlogData/' + id)
            .then((result) => {
                setName(result.data.name)
                setCity(result.data.city)
                setDescription(result.data.Description)
                setImage(result.data.image)
            })
            .catch((error) => console.log(error))
    }, [id])
    return (
        <>
            <div className="task_text">
                <h1>Fill Your Info... </h1>
            </div>
            <div className='task_container'>
                <form onSubmit={submithandler}>
                    <input type="text"
                        placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input type="text"
                        placeholder='Enter place'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />

                    <textarea type="text"
                        placeholder='Enter Your Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={Description}
                    />

                    <input type="text"
                        accept='image/*'
                        placeholder='Enter your image path link'
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </>
    )
}

export default EditBlog