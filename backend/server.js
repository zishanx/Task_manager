const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors');


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());

const taskRoutes = require('./routes/tasks')
app.use('/tasks', taskRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongo DB connected")).catch((err) => { console.log(err) })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})