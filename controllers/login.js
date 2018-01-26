var sidebar = require('../helpers/sidebar');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongotest');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

var UserSchema = new Schema({
    username: { type: String },
    password: { type: String }
});

// I used this to insert a record into the database
/*
var UserModel = mongoose.model('UserSchema', UserSchema);
var newUser = new UserModel({ username: 'username', password: 'password' });
newUser.save();

// test it
UserModel.find({ password: 'password'}, function(err, users){
    console.log(users.length);
    mongoose.connection.close();
});
*/

module.exports = {
    index: function(req, res) {
	var viewModel = {
	};

	sidebar(viewModel, function(viewModel) {
   		res.render('login', viewModel);
	});
    },
    login: function(req, res) {
        var viewModel = {
        	
	};

        sidebar(viewModel, function(viewModel) {
                res.render('login', viewModel);
        });
    },
    userModel: mongoose.model('userModel', UserSchema)
};

