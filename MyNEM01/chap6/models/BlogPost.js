const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost

BlogPost.find({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills'
}, (error, blogspot) => {
    console.log(error, blogspot)
})