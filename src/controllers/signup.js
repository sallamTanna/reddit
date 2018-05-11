const insert = require('../model/queries/insert')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');



const get=(req,res)=>{
  if(!req.headers.cookie || !req.headers.cookie.includes("token"))
  {
    res.render('signup');
  }
else{
  var token = cookie.parse(req.headers.cookie).token;
   jwt.verify(token , process.env.SECRET, (error, result)=>{
    if(error) {
  res.status(500);
}
    res.redirect('/')

  })
}

}


const post=(req,res)=>{
  var {name,password,phone,email} = req.body;
bcrypt.hash(password , 8 , (hashError,hashPassword)=>{
  if(hashError){res.status(500)}

  insert.insertUser(name,hashPassword,phone,email,cb=>{
    console.log('success');
    res.render('login')
  })

})




 }

module.exports = {get,post}
