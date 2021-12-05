const express = require('express');

const server = express();



server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('The Bot is online');

   res.end();

})



function keepAlive(){

   server.listen(3000, ()=>{console.log("Waiting for Verification")});

}



module.exports = keepAlive;