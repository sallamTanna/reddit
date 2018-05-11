const select = require('../model/queries/select');
const insert = require('../model/queries/insert');




const postPage= (req,res)=>{
const postId = req.params.postId;
const userId = req.params.userId;

select.selecComments(postId,result=>{
  const title = result[0].pbody;
    res.render('postPage' , {result,title,postId,userId})

})

}


module.exports = {postPage};
