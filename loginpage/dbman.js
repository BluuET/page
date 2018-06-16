

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var cors = require('cors');
app.use(cors());
//to login
app.post('/auth', function(req, res) {
        if(!req.body.email || !req.body.pass) {
                return res.send("missing parameter");
        }
        else{
                // Retrieve
                var MongoClient = require('mongodb').MongoClient;
                // Connect to the db
                MongoClient.connect("mongodb://localhost:27017", function(err, client) {
                        var eladb=client.db('login');
                    eladb.collection('log').findOne({email:req.body.email,pass:req.body.pass}, function(err, result) {
                                if (err) 
                                        throw err;
                                if(result){
                                        console.log(result);
                                        return res.send(String("1"));
                                        eladb.close();
                                }
                                else{
                                        console.log("User Not Found")
                                        return res.send("-1");
                                        eladb.close();
                                }
                        });
                });
        }
});
//to signup
app.post('/insert',function(req,res){
	// Retrieve
        var MongoClient = require('mongodb').MongoClient;
        var entry={fn:req.body.fname,ln:req.body.lname,email:req.body.email,pass:req.body.pass};
        console.log(entry);
                MongoClient.connect("mongodb://localhost:27017", function(err, client) {
                        var db=client.db('login');
                    db.collection('log').findOne({email:req.body.email}, function(err, result) {
                                if (err) 
                                        throw err;
                                if(result)
                                {
                                        console.log(result);
                                        return res.send("2");
                                        db.close();
                                            }
                                else{
                                       db.collection('log').insertOne(entry, function(err, result) {
                                           if (err) throw err;
                                            console.log("A user was added");
                                           return res.send("1");
                                            db.close();
                                });
                        }
                    });
                });
});

app.listen(8050);
console.log('Listening on port 8050...');
