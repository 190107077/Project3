var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
	extended: true
}));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/IDone", {useNewUrlParser: true});

var userScheme = new Schema({
	email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
	password : {
		type: String,
		required: true,
		min: 8
	}
});
var Users = mongoose.model('Users', userScheme);


MongoClient.connect(url, (err,db) =>{
	if(err) throw err;
	var data = db.db("Users");

	// router.get('/auth', (req,res)=>{
	// 	if(req.session.number){
	// 		res.sendFile(path.join(__dirname + '/demo2.html'));  uzhe tirkelgen kezdegi str
	// 	}
	// 	else{
	// 		res.render('registration.handlebars'); endi tirkelgen
	// 	}
	// });

	router.post('/auth12', (req,res)=>{
   var email2 = req.body.email;
   var password2 = req.body.password;
   
   data.collection('Users').find({email: email2}).toArray((err,result)=>{
   	if(result.length == 0){
   		var user = new Users({
   			email: email2,
   			password: password2
   		});
   		req.session.email = email2;
   		req.session.password = password2;

   		user.save((err)=>{
   			if(err) throw err;
   		});
   		res.redirect('/home');
   	}
   	else{
   		res.redirect('/home');
   	}
   });
});
});


module.exports = router;