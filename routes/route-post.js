const express = require('express');
const router = express.Router(); // Create a router instance
const { fun_post } = require('../controllers/post.js')

router.post("/", fun_post);
module.exports = router;
