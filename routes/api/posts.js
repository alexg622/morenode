const express = require('express')
const router = express.Router()
const Post = require('../../models/Post')

router.get('/test', (req, res) => res.json({msg: "working"}))

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts))
})

router.get('/:postId', (req, res) => {
  Post.findById(req.params.postId).then(post => res.json(post))
})

router.post('/', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.authorId
  })

  newPost.save().then(post => {
    User.findById(post.author).then(user => {
      user.posts.unshift(post)
      user.save()
    })
    res.json(post)
  })
})

router.patch('/:postId', (req, res) => {
  Post.update({_id: req.params.postId}, {title: req.body.title, body: req.body.body})
    .then(post => res.json(post))
})

router.delete('/:postId', (req, res) => {
  Post.findById(req.params.postId).then(post => {
    User.findById(post.author).then(user => {
      let idx = user.posts.indexOf(post.id)
      user.posts.splice(idx, 1)
      user.save()
    })
    post.remove().then(post => res.json(post))
  })
})

module.exports = router
