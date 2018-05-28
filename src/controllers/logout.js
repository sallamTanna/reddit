const cookie = require('cookie');

const logout = (req, res) => {

var token = cookie.parse(req.headers.cookie).token;

 res.clearCookie("token");
    res.render('login')
};


module.exports = {logout}
