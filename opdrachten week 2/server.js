/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');

http.createServer(function(request,response){
	console.log('er was een requesta');
	response.writeHead(200,{'Content-Type':'text/json'});

	var array = [
	{
		test:"gelukt",
                cijfer:65
        },
	{
		test:"gelukt",
                cijfer:70
	}
	];

	var json = JSON.stringify({"results":array});

	response.end(json);
}).listen(3000);

console.log('die server spint op poort 3000');

