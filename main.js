$(document).ready(function(){    
	


 $("#search").submit(function(){
	 event.preventDefault();
	 var $input=$('#search  :input')
	 var searchitem=$input[0].value
	 console.log($input)
	 $.ajax({
 		url: `https://swapi.co/api/people/?search=${searchitem}`,
  	datatype:  "JSONP"
	})
	.done(function(data){
	console.log(data)
	var name=data.results[0].name 
	var haircolor=data.results[0].hair_color
	var eyecolor=data.results[0].eye_color
	var skincolor=data.results[0].skin_color
	$("#table").append(`<tr>
		<td>${name}</td>
		<td>${haircolor}</td>
		<td>${eyecolor}</td>
		<td>${skincolor}</td>
		</tr>`)
	})
	.fail(function(data) {
	$("#main").append(`<h1>ERROR MESSAGE</h1>`) 
	})
})
	$("#clear").click(function(){
	// $("#table").empty()
	$("td").remove()

	})




})