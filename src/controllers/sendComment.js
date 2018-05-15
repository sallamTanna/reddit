const insertComment = require('../model/queries/insert');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');



const sendComment= (req,res)=>{
  const comment= req.body.comment;

if(comment==''){res.status(400).send('Insert something!') }
else {

  if(!req.headers.cookie || !req.headers.cookie.includes('token')){
    res.render('login');
  }
  else {
    jwt.verify(cookie.parse(req.headers.cookie).token , process.env.SECRET, (error,data)=>{
      if(error){res.render('login')}
      else {
        const id2 = data.id;
          const userId = req.originalUrl.split('/')[1];
        const postId = req.originalUrl.split('/')[2];
        insertComment.insertComment(comment,postId,id2,cb=>{
          res.redirect(`/${userId}/${postId}`)
        })

      }
    })
  }
}



}




module.exports = {sendComment}
