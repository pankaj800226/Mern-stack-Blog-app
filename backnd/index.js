const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const blogModel = require('./model/blog')
const subModel = require('./model/subscribe')
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

//mongoose
try {
  mongoose.connect(process.env.MONGODB_URL)
  console.log('mongoose connecter Database');
} catch (error) {
  console.log(`mongoose ${error}`);
}

//-------------------------------         Route handle          --------------------------------
//create a blog
app.post('/addblog', async (req, res) => {
  console.log(req.body);
  const { name, city, Description, image, date } = req.body
  await blogModel.create({
    name: name, Description: Description, city: city, image: image, date: date
  }).then((result) => res.json('Successfully'))
    .catch((err) => res.json(err));
})

//read write  to show Dispaly  output
app.post('/blogDispaly', async (req, res) => {
  await blogModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})


// route change all blog data
app.post('/allBlogData/:id', async (req, res) => {
  const { id } = req.params;
  await blogModel.findById({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

//edit 
app.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  await blogModel.findByIdAndUpdate({ _id: id }, {
    name: req.body.name,
    city: req.body.city,
    Description: req.body.Description,
    image: req.body.image,

  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

//delete 
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await blogModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
})

//subscribe route
app.put('/Addsubscribe', (req, res) => {
  const { subscribe } = req.body
  subModel.create({
    subscribe
  }).then((result) => res.json(result))
    .catch((error) => res.json(error))
})

//server
app.listen(process.env.PORT, () => {
  console.log('Server listening ');
})