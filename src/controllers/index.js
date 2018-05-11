const path = require('path');
const express = require('express');
const router = express.Router();
const home = require('./home')
const signup = require('./signup')
const login = require('./login')
const userPage = require('./userPage')
const postPage = require('./postPage')
const loggedHome = require('./loggedHome')
const sendComment = require('./sendComment')


router.get('/' , home.get);
router.get('/loggedHome' , loggedHome.get);
router.post('/check' , home.insertPost);
router.post('/sendPost' , loggedHome.insertPost);

router.get('/signup',signup.get);
router.post('/signup',signup.post);

router.get('/login',login.get);
router.post('/login',login.check); // to check if the user has account


router.get('/:id' , userPage) // to display user page
router.get('/:userId/:postId' , postPage.postPage)// to display post page
router.post('/:userId/:postId' , sendComment.sendComment)


router.get('/loggedHome' , loggedHome.get) // to display user page

// router.post('/sendComment' , sendComment.sendComment)


module.exports = router;
