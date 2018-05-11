const select = require('../model/queries/select');
const insert = require('../model/queries/insert');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');



const get = (req, res) => {
  select.selectPosts((posts) => {
    res.render('loggedHome', {
      posts
    });
  });
}



const insertPost = (req, res) => {

  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('login')
  } else {

    jwt.verify(cookie.parse(req.headers.cookie).token, process.env.SECRET, (error, result) => {
      if (error) {
        res.render('login')
      } else
      {
        var post = req.body.post;
        const newId = result.id;

        insert.insertPost(post, newId, (error, result) => {
          if (error) console.log(error);
          res.redirect('/loggedHome');

        })
      }

    })
  }
}

module.exports = {
  insertPost,
  get
}
