var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var fs = require('fs');
 
router.get('/', function(req, res) {
	var lang = '';
	if (typeof req.cookies.lang !== 'undefined' && req.cookies.lang && (req.cookies.lang == 'en' || req.cookies.lang == 'ro')){
		lang = req.cookies.lang;
	} else{
		lang='en';
	}
	console.log(lang);
	fs.readFile(__dirname + '/../info/translation.' + lang + '.json', 'utf8', (err, data) => {
		if (err) throw err;
		var obj = JSON.parse(data);
		
		fs.readFile(__dirname + '/../info/Projects/projects.' + lang + '.json', 'utf8', (err2, data2) => {
			if (err2) throw err2;
			obj.projects = data2;
			res.render('index', obj);
		});
		
	});
});
 
module.exports = router;