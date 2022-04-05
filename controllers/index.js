const mongoose = require('mongoose')
const { Post } = require('../models')

const postComment = async (req, res) => {
  try {
      const id = req.params._id
      const comment = new Comm({
          text: req.body.comment,
          username: req.body.username,
          review: req.body.review,
      })
      await comment.save()
      const location = await Post.findById(id)
          user.posts.push(comment)
          await location.save()
      return res.status(200).json({ comment })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({})
    return res.status(200).json({posts})
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getPost,
  postComment
} 