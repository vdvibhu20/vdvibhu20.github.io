var terminal= document.getElementById("terminal");
var	request;	
var toAppend;
var counter= 0;
var counter2;
var queryRecord= [""];
var terminalClone= $("#display").html();
var docHeight= document.body.clientHeight;
var webResume= document.getElementById('web-resume');
var webResumeht= webResume.clientHeight;
var backgroundFixTop= $('#background-top-bottom').offset().top;
var winTop= $(window).scrollTop();
var fixed= false;
console.log(docHeight, webResumeht, webResume.scrollTop);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(h);

$(window).resize(function () {
    console.log('resizing');
    backgroundFixTop= $('#background-top-bottom').offset().top;
    docHeight= document.body.clientHeight;
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    winTop= $(window).scrollTop();
})
// $('#web-resume').scroll(function (e) {
// 	console.log('scroll started');
// 	if(webResume.scrollTop== webResumeht){
// 		console.log('scrolled');
// 	}
// })
//
//
//
// $('body').scroll(function (e) {
// 	// console.log('windowScroll');
//     var s = $(window).scrollTop(),
//         d = $(document).height(),
//         c = $(window).height();
//
//     var scrollPercent = (s / (d-c)) * 100;
//     // console.log(scrollPercent);
//     // var sc= $('body').scrollTop();
//     // console.log(sc);
//     var web= $('#web-resume');
//     var offset= web.offset();
//     // console.log(offset.top);
//     if(offset.top< 70){
//     	// web.css('position', 'fixed');
//     	// web.css('top', '2%');
//         $('#terminal-resume').css('position', 'fixed');
//         $('#terminal-resume').css('top', '70px');
// 	}
// 	else{
//     	// web.css('position', 'relative');
// 	}
// })

// $(window).on('scroll', function () {
// 	var winscroll= $(window).scrollTop();
// 	var percent= winscroll/ docHeight;
// 	if(percent> 0.94 && !fixed){
// 		var margin= docHeight- winscroll;
//         $('#web-resume').css('margin-top', margin.toString()+'px');
//         $('#landing').css('bottom', (winscroll).toString()+'px');
//         $('#landing').css('position', 'fixed');
//         $('#landing').css('z-index', '100');
//         window.scrollTo(0,0);// As landing is fixed so doc height reduces
// 	}
// 	else if(fixed)	{
// 		$('#landing').css('position', 'static');
// 	}
// })

$(window).on('scroll', function () {
	winTop= $(window).scrollTop();
    // backgroundFixTop= $('#background-top-bottom').offset();
    // console.log(winTop, window.innerHeight);
	if(winTop> backgroundFixTop){
		if(!fixed){
            $('#background-top-bottom').addClass('fixed');
            $('#footer').addClass('fixed');
            docHeight= document.body.clientHeight;
            fixed= true;
            console.log('fixed');
            // console.log(docHeight);
		}
		console.log('inFixing');
	}
	else {
        $('#background-top-bottom').removeClass('fixed');
        console.log('removin fixed');
        fixed= false;
        // $('#footer').removeClass('fixed');
	}

	if(Math.floor(winTop) == docHeight- h){
        $('#footer').removeClass('fixed');
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
		$("#display").replaceWith("<div id=\"display\">"+ terminalClone+ "</div>");
		// $("#display").append("<p id=\"demo\"></p>");
}


function queryResponse(){
	choices= {
		help: "about for about<br> skills for skills<br> course for courses<br> project  for projects<br> interests for interests<br> contact for contact details",
		skills: "C|C++<br> JavaScript | HTML5 | CSS | MongoDB | SQL<br> Bootstrap | Semantic UI<br> jQuery | node.js<br> ADOBE PHOTOSHOP<br> PROGRAMMING TOOLS AND OS<br> Sublime Text | Git | Cloud9 | Linux | Windows",
		interests: "Music | Guitar | Yoga",
		about: "I am an undergraduate B.Tech student at the Department of Information Technology in Maharaja Surajmal Institute of Technology",
		projects: "<strong>--Contact Directory | August(2016)</strong><br>* Implemented a TRIE which can store contact numbers with their names<br>* Other Data Structures offer high time complexity whereas tries can handle this in constant time.<br> <strong>--Incredible India Website | July(2016)</strong><br> * Created a tour website for tourist spots in India.<br>* Frontend: HTML5, CSS, JavaScript| Backend: JavaScript, node.js, MongoDB",
		courses: "<strong>--Algorithms: Design and Analysis | Stanford University</strong><br> * Learned algorithms involving Graphs, Trees, Greedy Algorithms, and other Data Structures.<br> <strong>--WEB Development | UDEMY</strong><br> * HTML5 | CSS | JavaScript | node.js | MongoDB",
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
							toAppend="";
							break;	

		case "course":		toAppend= choices.courses;
							break;	
		
		case "contact": 	toAppend= choices.contact;
							break;
		
		case "": 			toAppend="";
							break;																								
		
		default: 		toAppend= "--"+ request+ ": command not found"
	}


		$("#display").append("<p id=\"newlyAdded\"><span class=\"user\"> <strong>savvy@</strong>user:~$</span> "+request+ "<br>"+toAppend+ "</p>");
		scrollToBottom();

		// for(var i=0; i<= counter; i++){
		// 	console.log(queryRecord[i]);
		// }


}


