console.log('Todd is pretty');

$(document).ready(function(){

  router = new MainRouter();   //my new router instance

  Backbone.history.start();

  function standardFetch(){
  	familyMember.fetch({
  		success: function(){
  			console.log ('Standard Fetch Has Run!')
  		},
  		error: function(){
  			console.log('Error With familyData.fetch!')
  		}
  	})
  }

window.familyMember = new MyFamilyCollection();

familyMember.on('add', function(newFamilyMember){
	new MyFamilyView({model: newFamilyMember})
}),

standardFetch();

var timeoutID = window.setInterval(standardFetch, 1000);

$('.enter-info').click(function(){
        
	var newName = new MyFamily({
        		
      name: $('.enter-name').val(),
      relation: $('.enter-relation').val(),
      age: $('.enter-age').val(),
      city: $('.enter-city').val()

      });


	//add it to the collection
	familyMember.add(newName);

	newName.save();
	$('.enter-name').val(''),
	$('.enter-relation').val(''),
	$('.enter-age').val(''),
	$('.enter-city').val('')
});	

});
      