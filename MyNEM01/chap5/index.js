const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', {useNewUrlParser:true})
const path = require('path')
const express = require('express') // require express module
const app = express() // calls express function to start new Express app
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => { // called when request to /about comes in
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => { //called when request to /contact comes
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})