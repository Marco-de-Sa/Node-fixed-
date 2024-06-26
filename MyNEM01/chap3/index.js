const path = require('path')
const express = require('express') // require express module
const app = new express() // calls express function to start new Express app
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})