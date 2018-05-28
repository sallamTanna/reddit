const connect = require('../db_connection.js')




exports.selectPosts = (cb) => {
  let sql = 'select u.name,u.id as u_id, p.id as p_id, p.body from users u inner join posts p on u.id=p.user_id;';
  connect.query(sql, (err, result) => {
    if (err) return cb(new Error(err));
    cb(result.rows)
  })
}




exports.selectUserPosts = (userId, cb) => {
  const sql = {
    text: `select u.id as idd, p.body as these_posts, p.id as this_p_id,
      u.name as this_name from posts p inner join users u on u.id=p.user_id where u.id=($1)`,
    values: [userId]
  }
  connect.query(sql, (err, result) => {

    if (err) return cb(new Error(err));
    cb(result.rows)
  })
}









exports.selecAllUsers = (email, cb) => {
  const sql = {
    text: `select * from users where email=($1)`,
    values: [email]
  }
  connect.query(sql, (err, result) => {

    if (err) return cb(new Error(err));
    cb(result.rows)
  })
}



exports.selecOneUser = (id, cb) => {
  const sql = {
    text: `select name from users where id=($1)`,
    values: [id]
  }
  connect.query(sql, (err, result) => {

    if (err) return cb(new Error(err));
    cb(result.rows[0])
  })
}





exports.selecComments = (postId, cb) => {
  const sql = {
    text: `SELECT c.body AS cbody, c.user_id AS user_id,p.body as post_body, u.name AS uname FROM Comments c
      LEFT JOIN Users u ON u.id = c.user_id inner join posts p on p.id=c.post_id WHERE c.post_id=($1);`,
    values: [postId]
  }
  connect.query(sql, (err, result) => {

    if (err) {
      return cb(new Error(err));
    } else {

      cb(result.rows)
    }
  })
}
