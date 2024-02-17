import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const Footer = () => {
  const [subscribe, setSubscribe] = useState('')
  const handleSubscribe = () => {
    if (subscribe !== "") {
      axios.post('http://localhost:8000/Addsubscribe', { subscribe })
        .then(result => {
          console.log(result)
          toast.success("😀 Thank you for subscribe");
        })
        .catch(error => console.log(error))
    } else {
      toast.error('😞 Please subscribe')

    }
    setSubscribe('')
  }
  return (
    <div className="footer">
      <h2>Copyright©MyBlog</h2>
      <div className="inp">
        <input type="text" placeholder="Enter Email"
          value={subscribe}
          required
          onChange={(e) => setSubscribe(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer