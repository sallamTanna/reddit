const insertComment = require('../model/queries/insert');



const sendComment= (req,res)=>{
  const comment= req.body.comment;

  // console.log('44444444444444444444444444444444444444',req.originalUrl);

  const userId = req.originalUrl.split('/')[1];
  const postId = req.originalUrl.split('/')[2];
   insertComment.insertComment(comment,userId,postId,1,cb=>{
        res.redirect(`/${userId}/${postId}`)
   })
}




module.exports = {sendComment}
