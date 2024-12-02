const express = require('express');
const { login, signup, fetchUserPassword } = require("../controllers/user");

const router = express.Router();

// router.get("/account/:id", fetchUserPassword);

router.post('/auth/signup', signup);
router.post('/auth/login', login);


module.exports = router;

//http: get, post, put, delete
