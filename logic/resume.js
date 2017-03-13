var terminal= document.getElementById("terminal");
var	request;	
var toAppend;
var counter= 0;
var counter2;
var queryRecord= [""];
var terminalClone= $("#display").clone();
console.log("hi");


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
		// console.log("hi");
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
		// $("#display").append("<p id=\"demo\"></p>");
}


function queryResponse(){
	choices= {
		help: "about for about<br> skills for skills<br> course for courses<br> project  for projects<br> interests for interests<br> contact for contact details",
		skills: "C|C++<br> JavaScript| HTML5| CSS| MongoDB| SQL<br> Bootstrap| Semantic UI<br> jQuery| node.js<br> ADOBE PHOTOSHOP<br> PROGRAMMING TOOLS AND OS<br> Sublime Text| Git| Cloud9| Linux| Windows",
		interests: "Music| Guitar| Yoga",
		about: "I am an undergraduate B.Tech student at the Department of Information Technology in Maharaja Surajmal Institute of Technology",
		projects: "<strong>--Contact Directory| August(2016)</strong><br>* Implemented a TRIE which can store contact numbers with their names<br>* Other Data Structures offer high time complexity whereas tries can handle this in constant time.<br> <strong>--Incredible India Website| July(2016)</strong><br> * Created a tour website for tourist spots in India.<br>* Frontend: HTML5, CSS, JavaScript| Backend: JavaScript, node.js, MongoDB",
		courses: "<strong>--Algorithms: Design and Analysis| Stanford University</strong><br> * Learned algorithms involving Graphs, Trees, Greedy Algorithms, and other Data Structures.<br> <strong>--WEB Development| UDEMY</strong><br> * HTML5| CSS| JavaScript| node.js| MongoDB",
		contact: "Mobile: 9958397988<br> Email: vdvibhu20@gmail.com"
	}


	switch(request){
		case "help":  		toAppend= choices.help;
							break;

		case "skills": 		toAppend= choices.skills;
							break;
		
		case "interests": 	toAppend= choices.interests;
							break;
		
		case "about": 		toAppend= choices.about;
							break;
		
		case "project": 	toAppend= choices.projects;
							break;

		case "clear": 		clear();
							break;	

		case "course":		toAppend= choices.courses;
							break;	
		
		case "contact": 	toAppend= choices.contact;
							break;																	
		
		default: 		toAppend= "--"+ request+ ": command not found"
	}


		$("#display").append("<p id=\"newlyAdded\"><span class=\"user\"> savvy@user:~$</span> "+request+ "<br>"+toAppend+ "</p>");
		scrollToBottom();

		// for(var i=0; i<= counter; i++){
		// 	console.log(queryRecord[i]);
		// }


}

