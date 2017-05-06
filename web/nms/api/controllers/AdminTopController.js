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

	edit: function(req, res) {
        AdminTop.update({type: '1'},{body: req.param('body')}).exec(function afterwards(err, updated){

          if (err) {
            res.serverError(err);
          }
          res.redirect('/controlcenter/top');
        });
	}
};
