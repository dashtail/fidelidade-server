module.exports = function (app){

    var api = app.api.Purchase;

    app.route('/purchase')
		.get(api.List)
		.post(api.Create);

}
