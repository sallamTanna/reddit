const select = require('../model/queries/select');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');


const get=(req,res)=>{

  if(!req.headers.cookie || !req.headers.cookie.includes("token"))
  {res.render('login')}
  else {
    var token  = cookie.parse(req.headers.cookie).token;
    jwt.verify(token , process.env.SECRET , (error,result)=>{
      if(error){res.render('login')}
      else {
        res.redirect('/')
      }
    })

  }
    }



const check=(req,res)=>{
 var {email , password} = req.body;

select.selecAllUsers(email, (cb)=>{
   if(cb[0]){
bcrypt.compare(password, cb[0].password  , (error,result)=>{
  if(error)return res.status(500);
  if(result){
    var token = jwt.sign({password, username:cb[0].name, logged:true , id:cb[0].id} , process.env.SECRET);
    res.cookie("token" ,token, {
      maxAge:90000,
      httpOnly:false
    });
      // req.headers.idForAddingPostForSpeceficUser= cb[0].id;

      res.redirect('/loggedHome');
    }
    else {
      res.send('<h1>Error password!</h1>')
    }
})
  }
  else {
res.send('<h1>No data for this user</h1>')  }
   })

   }





module.exports = {get,check}
