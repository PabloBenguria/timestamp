'use strict';

const router = require('./router/routes');

function init(app){
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	router.init(app);

	app.listen(app.PORT, () => {
		console.log('Express listening on port: ' + app.PORT);
	});
};

module.exports = {
	init: init
};
