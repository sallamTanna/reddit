const select = require('../model/queries/select');




const userPage= (req,res)=>{
const id = req.params.id;
select.selecOneUser(id,result=>{

   res.render('userPage' , {id,result})

})

}







module.exports = userPage;
