const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
    image: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost

BlogPost.find({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills'
}, (error, blogpost) => {
    console.log(error, blogpost)
})