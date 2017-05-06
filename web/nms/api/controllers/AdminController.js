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
		layout: 'admin_layout'
	},

	top: function(req, res) {
		console.log(sails.LOOKS_LIKE_ASSET_RX);
		res.view(
			'admin/top'
		);
	}
};
