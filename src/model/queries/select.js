const connect = require('../db_connection.js')
exports.selectPosts=(cb)=>{
let sql = 'select u.name,u.id as u_id, p.id as p_id, p.body from users u inner join posts p on u.id=p.user_id;';

connect.query(sql,(err,result)=>{

if(err) return cb(new Error(err));
cb(result.rows)
})
}









exports.selecAllUsers=(email,cb)=>{
  const sql = {
     text: `select * from users where email=($1)`,
     values: [email]
   }
 connect.query(sql,(err,result)=>{

if(err) return cb(new Error(err));
cb(result.rows)
})
}



exports.selecOneUser=(id,cb)=>{
  const sql = {
     text: `select name from users where id=($1)`,
     values: [id]
   }
 connect.query(sql,(err,result)=>{

if(err) return cb(new Error(err));
cb(result.rows[0])
})
}





exports.selecComments=(postId,cb)=>{
  const sql = {
     text: `select c.body as cbody, p.body as pbody, u.id as user_id, u.name from users u inner join posts p on u.id=p.user_id inner join comments c on c.post_id=p.id where p.id=($1)`,
     values: [postId]
   }
 connect.query(sql,(err,result)=>{

if(err) return cb(new Error(err));
cb(result.rows)
})
}


// select c.body from comments c inner join posts p  on c.post_id=p.id where p.id=($1)
