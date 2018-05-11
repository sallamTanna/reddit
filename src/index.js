const app  = require('./app.js');

app.listen(app.get('port'), ()=>{
  console.log("Lestining on port "+app.get('port'));
});
