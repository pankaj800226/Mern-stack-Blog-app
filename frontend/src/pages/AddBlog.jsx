import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [Description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()
  //add blog database
  const submithandler = (e) => {
    e.preventDefault();
    if (name !== "" && city !== "" && Description !== "" && image !== "" && date !== "") {
      axios.post('http://localhost:8000/addblog', {
        name, Description, city, image, date
      }).then((result) => {
        console.log(`Blog deleted: ${result}`);
        navigate('/myblog')
        toast.success("Successfully Your Post")
      })
        .catch((error) => console.log(error))

    } else {
      toast.error("Please fill Your Post")
    }
    //empty data
    setName('')
    setDescription('')
    setCity('')
    setImage('')
  }
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

          <input type="date"
            style={{ cursor: "pointer" }}
            placeholder='Enter data'
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />

          <textarea type="text"
            placeholder='Enter Your Description'
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
          />

          <input type="text"
            accept='image/*'
            placeholder='Enter Your Image Url'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <button type='submit'>POST</button>
        </form>
      </div>
    </>
  )
}

export default AddBlog