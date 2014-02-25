var MyFamilyView = Backbone.View.extend ({

  tagName: 'div',

  className: 'my-family',


  createTemplate: _.template($('#myFamilyTemplate').text()),

  events: {

  },

  initialize: function(){               //anything in initialize only happens ONE TIME
   // this.render();
    $('.view-here').append( this.el );  //this.el can be injected into the page before or after it has been given content


    this.listenTo(this.model, 'change', this.render)
  },

  render: function(){														//fill or refill
	var renderedTemplate = this.createTemplate(this.model.attributes);

	this.$el.html(renderedTemplate);
  }

})