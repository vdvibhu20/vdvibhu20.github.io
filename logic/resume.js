


var terminal= document.getElementById("terminal");
var	request;	
var toAppend;
var counter= 0;
var counter2;
var queryRecord= [""];
var terminalClone= $("#display").html();
var docHeight= document.body.clientHeight;
var backgroundFixTop= $('#background-top-bottom').offset().top;
var backgroundFixHeight= $('#background-bottom-top').outerHeight(true);
var winTop= $(window).scrollTop();
var fixed= false;
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(window).on('load', function () {
    $('#load-background-bottom').addClass('shadow');
    $('#load-background-top').css('top', '-55vh');
    $('#load-background-bottom').css('top', '102vh');

    $('html').css('overflow-y', 'auto');
});

$(window).resize(function () {
    backgroundFixTop= $('#background-top-bottom').offset().top;
    backgroundFixHeight= $('#background-bottom-top').outerHeight(true);
    docHeight= document.body.clientHeight;
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    winTop= $(window).scrollTop();
})

$(window).on('scroll', function () {
	winTop= $(window).scrollTop();
	if(winTop> backgroundFixTop){
		if(!fixed){
            $('#background-top-bottom').addClass('fixed');
            $('#background-bottom-top').addClass('fixed');
            docHeight= document.body.clientHeight;
            fixed= true;
		}
	}
	else {
        $('#background-top-bottom').removeClass('fixed');
        fixed= false;
	}

	if($('#background-bottom-top').offset().top > $('#footer').offset().top){
        $('#background-bottom-top').removeClass('fixed');
	}
	else if($(window).scrollBottom()> $('#footer').outerHeight(true)- backgroundFixHeight){
        $('#background-bottom-top').addClass('fixed');
	}


})

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
			// console.log("up");
			up();
		}

		else if(event.which== '40'){
			down();
		}
}

function up(){
		if(counter2>= 1){
			counter2--;
			$("#input").val(queryRecord[counter2]);			
		}
		// console.log("up");
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
		$("#display").replaceWith("<div id=\"display\">"+ terminalClone+ "</div>");
		// $("#display").append("<p id=\"demo\"></p>");
}


function queryResponse(){
	choices= {
		help: "about for about<br> skills for skills<br> experience for experience<br> course for courses<br> project  for projects<br> interests for interests<br> contact for contact details",
		skills: "C|C++<br> JavaScript | HTML5 | CSS <br> node.js | jQuery | Angular.js<br> AWS Cognito | leaflet.js | ui-select <br>Postgres | MongoDB | SQL <br> Bootstrap | Semantic UI<br> ADOBE PHOTOSHOP<br> PROGRAMMING TOOLS AND OS:-<br> Sublime Text | Git | WebStorm | Cloud9 | Linux | Windows",
		interests: "Music | Guitar | Yoga",
		about: "I am an undergraduate B.Tech student at the Department of Information Technology in Maharaja Surajmal Institute of Technology. My interest lies in the field of Data Structures and Algorithms. I am a Web Developer and fitness enthusiast.",
		projects: "<strong>--Contact Directory | August(2016)</strong><br>* Implemented a TRIE which can store contact numbers with their names<br>* Other Data Structures offer high time complexity whereas tries can handle this in constant time.<br> <strong>--Incredible India Website | July(2016)</strong><br> * Created a tour website for tourist spots in India.<br>* Frontend: HTML5, CSS, JavaScript| Backend: JavaScript, node.js, MongoDB",
		courses: "<strong>--Algorithms: Design and Analysis | Stanford University</strong><br> * Learned algorithms involving Graphs, Trees, Greedy Algorithms, and other Data Structures.<br> <strong>--WEB Development | UDEMY</strong><br> * HTML5 | CSS | JavaScript | node.js | MongoDB",
		contact: "Mobile: 9958397988<br> Email: vdvibhu20@gmail.com",
		experience: "<strong>--Full Stack Web Developer </strong><br> " +
							"<a href='http://www.swaniti.com/' class='user' target='_blank'>@Swaniti Initiative</a> | June 2017 - July 2017 <br>" +
							"* Created Data Clean Tool for data collected via surveys conducted all over India. <br>" +
							"* Maintained history of all operations performed using Data Clean Tool so user can revert back to previous state (Undo/Redo).<br>" +
							"* Developed REST API and secured them using AWS Cognito sessions. <br>* " +
							"Cleaned data was represented on India map using LeafletJs for detailed analysis. <br>" +
							"* Tech Stack: NodeJs, JavaScript, AngularJs, Postgres",

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
							toAppend="";
							break;	

		case "course":		toAppend= choices.courses;
							break;	
		
		case "contact": 	toAppend= choices.contact;
							break;
		
		case "": 			toAppend="";
							break;

		case "experience":	toAppend= choices.experience;
							break;
		
		default: 		toAppend= "--"+ request+ ": command not found"
	}


		$("#display").append("<p id=\"newlyAdded\"><span class=\"user\"> <strong>savvy@</strong>user:~$</span> "+request+ "<br>"+toAppend+ "</p>");
		scrollToBottom();

		// for(var i=0; i<= counter; i++){
		// 	console.log(queryRecord[i]);
		// }


}

$.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
}


