var fs = require ('fs');
const superagent = require('superagent');


//------promise-----------------------

function readFilePromise(fileLocation) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileLocation, (err, randomText) => {
        if (err) {
          reject('not able to read the file')
        }
        resolve(randomText)
      })
    })
  }
  function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, result, (err) => {
        if (err) {
          reject('not able to write to the file')
        }
        resolve()
      })
    })
  }

  readFilePromise('./name.txt')
   .then((randomText) => {
     console.log(`my string is ${randomText}`);
     return superagent.get(`https://robohash.org/${randomText}/images/random`)
   })
   .then((res) => {
     console.log('String  is ', res.request.url)
     return writeFilePromise('./roboimage.txt', res.request.url)
   })
   .then(() => {
     console.log('sucessfully written the file')
   })
   .catch((err) => {
     console.log(err)
   })

/*function readFilePromise(fileLocation) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileLocation, (err, data) => {
        if (err) {
          reject('not able to read the file')
        }
        resolve(data)
      })
    })
  }
  function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, result, (err) => {
        if (err) {
          reject('not able to write to the file')
        }
        resolve()
      })
    })
  }

readFilePromise('./name.txt')
  .then((data) => {
     console.log(`Robo is ${data}`)
       return superagent.get(`https://robohash.org/${data}`)
   })
   .then((res) => {
     console.log('Robo image is ', res.body.message)
     return writeFilePromise('./robo-image.txt', res.body.message)
   })
   .then(() => {
     console.log('sucessfully written the file')
   })
   .catch((err) => {
     console.log(err)
   })*/

//--------callback-------------
/*fs.readFile('./name.txt','utf8', function(err, data){
  
    console.log(`The robo is ${data}`);
    superagent.get (`https://robohash.org/${data}`)
    .end((err,res)=>{
        console.log(res.body.messsage)
        fs.writeFile('./roboImage.txt', res.body.message,(err,data)=>{
            console.log('Robo name successfully written!!');
        })
    })
});*/
  
/*const robo=(err,data)=>{
    data = Math.random().toString(36).substring(2,7);
    superagent
    .get(`https://robohash.org/${data}`)
    .end((err,res)=>{
        console.log(res.badRequest.url);
        fs.writeFile("./roboImage.txt",res.badRequest.url,(err)=>{
            console.log("Inmage stored");
        });
    });
};
robo()*/