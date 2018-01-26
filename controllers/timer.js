var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    request = require('request');
var sidebar = require('../helpers/sidebar');

var responseData;
module.exports = {
    index: function(req, res) {
	
	
    request({
            method: 'GET',
            uri: 'http://vojvodcp.270e.csi.miamioh.edu:3500/',
        }, function(err, response, body) {
            var data/* = body.substring(body.indexOf('(')+1)*/;
            //data = JSON.parse(/*data.substring(0,data.length-1)*/body);
            /*var related = [];
            _.each(data.d, function(timer, index) {
                related.push({
                    id: timer.id,
                    state: timer.state,
					timerName: timer.timerName,
                    doneTime: timer.doneTime
                });*/
            	console.log(body);
//	    });

//            res.json(related);
        });


	/* function(req, res) {
	// get the info from database
	http.get('http://vojvodcp.270e.csi.miamioh.edu:3500/', function(res){
		responseData = JSON.parse(res);
	});
	console.log(responseData);
	// put in viewModel
	var viewModel = {
            timer: {
                id:		responseData.id,
                state:          responseData.state,
                timerName:	responseData.timerName,
		doneTime:	responseData.doneTime,
            },
        }; */

// comment out while trying to use database info
	var viewModel = {
	    timer: {
		id:	'timer1',
		state:	100,
		timerName:    'testtime',
		donetime: 23456789098655345,
	    },
	};

	sidebar(viewModel,function(viewModel){
		res.render('timer', viewModel);
	});

    },
    create: function(req, res) {
	var saveTimer = function() {
		var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
		    possId = '';

		for(var i=0; i < 6; i+=1) {
		    possId += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		// get rid of this and make something that stores timer, instead?
		/*
		var tempPath = req.files.file.path,
		    ext = path.extname(req.files.file.name).toLowerCase(),
		    targetPath = path.resolve('./public/upload/' + imgUrl + ext);

		if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
		    fs.rename(tempPath, targetPath, function(err) {
			if (err) throw err;

			res.redirect('/images/' + imgUrl);
		    });
		} else {
		    fs.unlink(tempPath, function () {
			if (err) throw err;

			res.json(500, {error: 'Only image files are allowed.'});
		    });
		} */
		
		id = possId;
	};
	saveTimer();
    }
};
