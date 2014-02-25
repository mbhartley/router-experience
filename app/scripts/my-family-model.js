var MyFamily = Backbone.Model.extend({

	defaults: {
		name: 'no name',
		relation: 'no relation',
		age: 'no age',
		city: 'no city',
	},
});

var MyFamilyCollection = Backbone.Collection.extend({
	model: MyFamily,

	url: 'http://tiny-pizza-server.herokuapp.com/collections/myFamilyData'
})