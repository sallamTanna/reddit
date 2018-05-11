const select= require('../model/queries/select');
const insert= require('../model/queries/insert');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');



const get=(req,res)=>{
  select.selectPosts((posts) => {
    res.render('home', { posts });
  });
}



const insertPost=(req,res)=>{

if(!req.headers.cookie || !req.headers.cookie.includes('token'))
{res.render('login')}
else {

jwt.verify(cookie.parse(req.headers.cookie).token , process.env.SECRET, (error,result)=>{
  if(error){res.render('login')}
  else {
    res.redirect('/loggedHome')
    // var {body} = req.body;
    // insert.insertPost(body,1,1,(error,result)=>{
    //   if(error)console.log(error);
    //   res.redirect('/');
}
    })
  }

  }




module.exports= {get,insertPost};
