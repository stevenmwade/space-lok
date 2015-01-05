var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	about: function(req, res) {
		res.render('about');
	},

	products: function(req, res) {
		res.render('products');
	},

	facilities: function(req, res) {
		res.render('facilities');
	},

	contact: function(req, res) {
		res.render('contact');
	}
};

module.exports = indexController;