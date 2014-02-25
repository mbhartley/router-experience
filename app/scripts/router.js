var MainRouter = Backbone.Router.extend({

	routes: {
		"about": "aboutPage",
		"myFamily": "myFamily", 
	},

	initialize: function(){
		console.log('Hey guys, unto us a router is born!')
	},

	aboutPage: function(){
		if (name){
			console.log ('Here is a page about', name)
		} else {
		console.log('Boom! You have arrived at the about page!')
	}
  },

    myFamily: function(){
  		if (name){
  			console.log ('Here is a page about', name)
  		} else {
  		console.log('Boom! You have arrived at the myFamily page!')
  	}
    }
  


});