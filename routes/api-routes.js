const express = require('express');
const router = express.Router();

// // Requiring our Todo model
const db = require('../models');
const Post = require('../models/post')

router.get('/', (req, res) => 
    Post.findAll()
    .then(posts => {
        console.log(posts);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));
// // Routes

// Add a post

router.get('/add', (req, res) => {
    const post = {
        title: "",
        content: "",
        upScore: '',
        category: "",
        userId: "",
    }
})

let { title, content, upScore, category, userId} = data; 

Post.create({
    title,
    content,
    upScore,
    category,
    userId
})
    .then( gig => res.redirect('/posts'))
    .catch(err => console.log(err));

module.exports = router;

// module.exports = (app) => {

//     app.post('/api/posts', (req, res) => {
//         console.log(req.body);
//         db.Post.create({
//           title: req.body.title,
//           content: "",
//           upScore: "",
//           category: req.body.category,
//           userID: req.params.userID,
//         }).then((dbPost) => res.json(dbPost));
//       });
// };




