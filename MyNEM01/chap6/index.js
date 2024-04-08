const express = require('express') // require express module
const path = require('path')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/my_database',{ useNewUrlParser: true })

const app = new express() // calls express function to start new Express app
const ejs = require('ejs')

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})