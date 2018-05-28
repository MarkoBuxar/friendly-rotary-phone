const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/v2'));

app.listen(3000, (err,res)=>{
	console.log('webpage hosted on localhost:3000');
});