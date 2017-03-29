module.exports = function (app){

    var api = app.api.Product;

    app.route('/product')
		.get(api.List)
		.post(api.Create);

}
