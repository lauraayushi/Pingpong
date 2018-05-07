//business logic
var myNumber= function(countTo) {
var result = [];
for (var i=1;i<=countTo; i++) {
	if (i % 15 === 0) {
	result.push ('pingpong');
	}else if (i % 5 === 0) {
	 result.push ('pong');
	}else if (i % 3 === 0) {
	 result.push ('ping');
	}else {
	 result.push (i);
	}
}

return result;
};
// user-interface logic
	$(document).ready(function() {
	 $("#user-input").submit(function(event){
	  $("#outcome").empty();
	   var countTo = parseInt($("input#countTo").val());
	   var output =myNumber(countTo);

	 output.forEach(function(item){
	$("#outcome").append('<li>'+ item + '</li>');
	});
	event.preventDefault();
   });
  });





