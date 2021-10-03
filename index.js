var fs = require ('fs');
const superagent = require('superagent');


fs.readFile('./name.txt','utf8', function(err, data){
  
    console.log(`The robo is ${data}`);
    superagent.get (`https://robohash.org/${data}`)
    .end((err,res)=>{
        console.log(res.body.messsage)
        fs.writeFile('./roboImage.txt', res.body.message,(err,data)=>{
            console.log('Robo name successfully written!!');
        })
    })
});
  
