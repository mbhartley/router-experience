var MyFamily = Backbone.Model.extend({

	defaults: {
		name: 'no name',
		relation: 'no relation',
		age: 'no age',
		city: 'no city',
	},
});

var MyFamilyCollection = Backbone.Collection.extend({
	
	model: MyFamily,  //we must do this to pass the object literals into the collection

	url: 'http://tiny-pizza-server.herokuapp.com/collections/myFamilyData'
})