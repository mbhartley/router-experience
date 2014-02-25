var MyFamilyView = Backbone.View.extend ({

  tagName: 'div',

  className: 'my-family',


  createTemplate: _.template($('#myFamilyTemplate').text()),

  events: {

  },

  intialize: function(){
    $('.view-here').append( this.el );

    render();

    this.listenTo(this.model, 'change', this.render)
  },

  render: function(){
	var renderedTemplate = this.createTemplate(this.model.attributes);

	this.$el.html(renderedTemplate);
  }

})