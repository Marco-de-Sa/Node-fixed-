const path = require('path')
const express = require('express') // require express module
const app = new express() // calls express function to start new Express app
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'index.html'))
    res.render('index');
})

app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})
app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})
app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})