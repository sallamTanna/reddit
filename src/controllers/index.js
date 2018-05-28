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
const logout = require('./logout')


router.get('/' , home.get);
router.get('/loggedHome' , loggedHome.get);
router.post('/check' , home.insertPost);
router.post('/sendPost' , loggedHome.insertPost);

router.get('/signup',signup.get);
router.post('/signup',signup.post);

router.get('/login',login.get);
router.post('/login',login.check);


router.get('/:id' , userPage)
router.get('/:userId/:postId' , postPage.postPage)
router.post('/:userId/:postId' , sendComment.sendComment)


router.get('/loggedHome' , loggedHome.get)
router.post('/logout' , logout.logout)


module.exports = router;
