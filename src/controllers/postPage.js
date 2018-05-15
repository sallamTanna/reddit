const select = require('../model/queries/select');
const insert = require('../model/queries/insert');




const postPage= (req,res)=>{
const postId = req.params.postId;
const userId = req.params.userId;



select.selecComments(postId,result=>{

  if(result ==''){  res.render('postPage', {postId,userId}) }
   else {

     const title = result[0].post_body;
    res.render('postPage' , {result,title,postId,userId})
  }
})

}


module.exports = {postPage};
