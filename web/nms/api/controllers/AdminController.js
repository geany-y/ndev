/**
 * AdminController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	_config: {
		actions: false,
		shortcuts: false,
		rest: false,
	},

	top: function(req, res) {
		console.log(req.session);
		res.view(
			'admin/top',
			{
				baseUrl: req.headers.host,
				//username: req.session.user.usename,
				layout: 'admin_layout'
			}
		);
	}
};
