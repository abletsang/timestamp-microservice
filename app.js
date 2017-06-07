"use strict";

var express = require("express");

var app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/:date", function(req, res) {
		var output = {
		unix: null,
		natural: null,
	};
	var input = Date.parse(req.params.date);
	if (isNaN(input) === false) {
		var d = new Date(input);
		output.unix = input;
		output.natural = d.toDateString(input);
	}


	res.send(JSON.stringify(output));
});

app.listen(8080, function() {
	console.log("start!");
});