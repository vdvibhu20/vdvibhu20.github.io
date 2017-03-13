var terminal= document.getElementById("terminal");
var	request;	
var toAppend;
var counter= 0;
var counter2;
var queryRecord= [""];
var terminalClone= $("#display").clone();


function queryProcess(event){
		if(event.which== '13'){
			request= document.getElementById("input").value;	
			counter++;
			counter2= counter;
			queryRecord.push("");
			queryRecord[counter-1]= request;
			queryResponse();
		}

		else if(event.which== '38'){
			console.log("up");
			up();
		}

		else if(event.which== '40'){
			down();
		}
		console.log("hi");
}

function up(){
		if(counter2>= 1){
			counter2--;
			$("#input").val(queryRecord[counter2]);			
		}
		console.log("up");
}

function up(){
		if(counter2< counter){
			counter2++;
			$("#input").val(queryRecord[counter2]);			
		}
}

function scrollToBottom(){
		terminal.scrollTop= terminal.scrollHeight;
		$("#input").val('');
}

function clear(){
		$("#display").replaceWith(terminalClone.clone());
		console.log(terminalClone);
}


function queryResponse(){
	choices= {
		skills: "HTML, JavaScript ......",
		interests: "Music, Guitar, Photography",
		about: "I am undergraduate B.E student..",
		projects: "Nothing"
	}
	switch(request){
		case "help":  		toAppend= "about: for about"
							break;

		case "skills": 		toAppend= choices.skills;
							break;
		
		case "interests": 	toAppend= choices.interests;
							break;
		
		case "about": 		toAppend= choices.about;
							break;
		
		case "projects": 	toAppend= choices.projects;
							break;

		case "clear": 		clear();
							break;						
		
		default: 		toAppend= "Enter a valid choice or enter help"
	}


		$("#display").append("<p id=\"newlyAdded\"><span class=\"user\"> savvy@user:~$</span> "+request+ "<br>"+toAppend+ "</p>");
		scrollToBottom();

		// for(var i=0; i<= counter; i++){
		// 	console.log(queryRecord[i]);
		// }


}

