'use strict';

const moment = require('moment');

function init(app){
	app.get('/', (req, res) => {
		res.render('index', {title: 'Timestamp'});
	});
	app.get('/:param', (req, res) => {
		if(moment(req.params.param, "MMMM D, YYYY").isValid()){
			if(isNaN(req.params.param)){
				res.json({
					unix: getUnix(req.params.param),
					natural: req.params.param
				});	
			}else{
				res.json({
					unix: req.params.param,
					natural: getNatural(req.params.param)
				});
			}
		}else{
			res.json({
				unix: null,
				natural: null
			});
		}
	});
};

function getUnix(param){
	return moment(param, "MMMM D, YYYY").format("X");
};

function getNatural(param){
	return moment.unix(param).format("MMMM D, YYYY");
};

module.exports = {
	init: init
};


