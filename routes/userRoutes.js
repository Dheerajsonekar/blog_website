const express = require('express');
const router = express.Router();
const {postBlog, deleteComment, postComment, getBlogs, getComments } = require('../controllers/userControllers');


router.get('/getBlogs', getBlogs);
router.post('/postBlog', postBlog);


router.get('/getComments', getComments);
router.post('/postComment', postComment);
router.delete('/deleteComment/:id', deleteComment);

module.exports = router;


