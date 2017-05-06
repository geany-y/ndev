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
		AdminTop.find({type:'1'}).exec(function (err, topNotes){
			if (err) {
				res.redirect('/500')
			}
			res.view(
				'top',
				{
					baseUrl: req.headers.host,
					records: topNotes,
					layout: 'layout'
				}
			);
		});
	}
};
