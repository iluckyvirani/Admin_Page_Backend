import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import User from './Routes/User.js'
import Banner from './Routes/Banner.js'

const app = express();
app.use(bodyParser.json());
app.use(cors())

dotenv.config()
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT||6010, () => console.log('MongoDB connected')))
  .catch((err) => console.error(err));



// usage of routes
app.use('/user',User)
app.use('/banner',Banner)
