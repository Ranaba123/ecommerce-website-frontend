//creating a basic server

import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB(); // connecting to the database
connectCloudinary(); // connecting to cloudinary


//Middleware creating

app.use(express.json()); // request body parsing middleware using json
app.use(cors()); // adding this we can access the backend from any IP


//API endpoints
app.get('/', (req, res) => {
    res.send("API working"); // when ever we start the local host 4000 it should display "API working"
});

app.listen(port, ()=> console.log('Server is started on PORT : '+port))