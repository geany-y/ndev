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
		res.view(
			'admin/top',
			{
				baseUrl: req.headers.host,
				username: '管理者様',
				layout: 'admin_layout'
			}
		);
	}
};
