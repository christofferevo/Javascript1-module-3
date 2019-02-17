//Use RegEx to validate form

document.getElementById("submit").addEventListener("click", inputValidator ()); 


function inputValidator (){
	var inputFields = document.getElementsByTagName("input");

	for (var i=0; i < inputFields.lenght; i++){
		var theInput = inputFields[i].value;
		console.log(theInput);

	}
};

