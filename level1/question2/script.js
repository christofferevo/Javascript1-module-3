
//Console.log out elements in JSON file
var request;
if (window.XMLHttpRequest){
	request=new XMLHttpRequest();
} else{
	request=new ActiveXObject("Microsoft.XMLHTTP")
};


request.open('GET', 'author.json');
request.onreadstatechange = function() {
	if ((request.status===200)&&(request.readyState===4)){

 	var mydata = JSON.parse(video);

 	for (var i=0; i < mydata.lenght; i++){
		
		console.log(mydata[i]);
	};

};




