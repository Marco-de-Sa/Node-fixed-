const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost.js');
// allowing files to be uploaded and handled
const fileUpload = require('express-fileupload');
// create a new Express application
const app = new express();

//controller stuff
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
//

//
const validateMiddleware = require("./middleware/validateMiddleware");
//

// allows the program to read static files from the public folder
app.use(express.static('public'));
// the next 2 functions enable the app to handle POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// adding custom middleware
const customMiddleware = (req, res, next) => {
    console.log("Custom middleware called");
    next();
}
app.use(customMiddleware);

// validates input from user
// if input fields are empty, redirect to /posts/new
// const validateMiddleware = (req, res, next) => {
//     if (req.files == null || req.body.title == null) {
//         return res.redirect('/posts/new');
//     }
//     next();
// }

// With app.set('view engine','ejs'), we tell Express to use EJS as our templating engine, 
// that any file ending in .ejs should be rendered with the EJS package.
app.set('view engine', 'ejs');
mongoose.connect('mongodb://127.0.0.1/my_database', {useNewUrlParser: true});

app.get('/', homeController);

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post/:id', getPostController);

app.get('/posts/new', newPostController);

app.use('/posts/store', validateMiddleware);

app.post('/posts/store', storePostController);

app.listen(3000, () => {
    console.log("App listening on port 3000");
});