var fs = require ('fs');
const superagent = require('superagent');


//------promise-----------------------

/*function readFilePromise(fileLocation) {
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
*/


//--------callback-------------
fs.readFile('./name.txt','utf8', function(err, data){
  
    console.log(`The robo is ${data}`);
     superagent.get(`https://robohash.org/${data}/images/random`)
    .end((err,res)=>{
        console.log(res.request.url)
        fs.writeFile('./roboImage.txt', res.request.url,(err,data)=>{
            console.log('Robo name successfully written!!');
        })
    })
});
  
