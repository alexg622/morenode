const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const db = require('./.git/keys').mongoURI

mongoose.connect(db).then(() => console.log("mongoDB is connected")).catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send("Working"))

app.use("/api/users", users)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))
