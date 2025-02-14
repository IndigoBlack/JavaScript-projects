
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
    {id: 1, title: 'Post One'},
    {id: 1, title: 'Post Two'},
    {id: 1, title: 'Post Three'},
];

// Get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
       return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
})

// Get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        res.status(200).json({msg: `A post with the id of ${id} was not found`})
    } else {
        res.status(200).json(post)
    }
})

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`)
})