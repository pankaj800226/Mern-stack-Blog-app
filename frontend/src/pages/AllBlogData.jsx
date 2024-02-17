import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const AllBlogData = () => {
    const { id } = useParams()
    const [allBlogData, setAllBlogData] = useState([])
    useEffect(() => {
        axios.post('http://localhost:8000/allBlogData/' + id)
            .then((result) => setAllBlogData(result.data))
            .catch((error) => console.log(error))
    }, [id])

    return (
        <div className='all_blog_data'>
            <div className='Blog_data'>
                <div className='blog_imgs'>
                    <img src={allBlogData.image} alt="" />
                </div>
                <div>
                    <p span > Name : {allBlogData.name}</p>
                    <p>City : {allBlogData.city}</p>
                    <p>Date : {allBlogData.date}</p>
                    <p>Des : {allBlogData.Description}</p>
                </div>
            </div>

        </div>

    )
}

export default AllBlogData