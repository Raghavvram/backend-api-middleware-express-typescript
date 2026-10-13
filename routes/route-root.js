const express = require('express');
const router = express.Router(); // Create a router instance
const { fun_root } = require('../controllers/root.js')

router.get("/", fun_root);
module.exports = router;
