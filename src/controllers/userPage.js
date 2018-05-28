const select = require('../model/queries/select');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');




const userPage = (req, res) => {
  const id = req.params.id;


  if (!req.headers.cookie || !req.headers.cookie.includes('token')) {
    res.render('login')
  } else {
    jwt.verify(cookie.parse(req.headers.cookie).token, process.env.SECRET, (errro, data) => {
      if (errro) {
        res.render('login')
      } else {

        select.selectUserPosts(id, result => {
          const username = result[0].this_name;
          res.render('userPage', {
            result,
            username
          })
        })

      }
    })
  }




}







module.exports = userPage;
