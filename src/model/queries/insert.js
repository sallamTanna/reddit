const connection = require('../db_connection');







 exports.insertPost=(body,user_id,cb)=>{
  const sql = {
     text: `INSERT INTO posts(body, user_id) VALUES ($1 , $2  )`,
     values: [body, user_id]
   }
   connection.query(sql, (error, res) => {
     if (error) return cb(error);
     cb(null, res);
   })
}



exports.insertUser=(name,password,phone,email,cb)=>{
 const sql = {
    text: `INSERT INTO users(name,password,phone,email) VALUES ($1 , $2 ,$3, $4 )`,
    values: [name,password,phone,email]
  }
  connection.query(sql, (error, res) => {
    if (error) return cb(error);
    cb(null, res);
  })
}



exports.insertComment=(commentBody,post_id,user_id,parent_id,cb)=>{
 const sql = {
    text: `INSERT INTO comments(body,post_id,user_id,parent_id) VALUES ($1 , $2 ,$3, $4 ) returning user_id`,
    values: [ commentBody,post_id,user_id,parent_id]
  }
  connection.query(sql, (error, res) => {
    if (error) return cb(error);
     cb(null, res.rows);
  })
}
