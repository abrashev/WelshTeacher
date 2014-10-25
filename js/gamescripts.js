// JavaScript Assignment Document
var lvl=0;
var num=0;
var mousex=0;
var mousey=0;
var tempscore=0;

(function(window){
	function Letter (welsh, pronunciation, description) {
			//private variables
	 		 
			  var _welsh=welsh;
			  var _pronunciation=pronunciation;
			  var _description=description;
			  this.getAnswer=function(){return _pronunciation;};
			  this.getWelsh=function(){return _welsh;};
			  this.getDescription=function(){return _description;};
	}
		Letter.prototype.getQuestion=function(){
			return "What is pronunciation of letter \""+this.getWelsh()+ "\" in Welsh?";
		};				
	
	window.Letter=Letter;
		  
		  }(window));

function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	alert(randomstring);
}

(function(window){
	function Question (english, welsh) {
			//private variables
	 		 var _english=english;
			  var _welsh=welsh;
			  this.getEnglish=function(){return _english;};
			  this.getAnswer=function(){return _welsh;};
	}
	Question.prototype.getQuestion=function(){
		return "What is \""+this.getEnglish()+ "\" in Welsh?";
	};
	
	window.Question=Question;
		  
		  }(window));

var alphabet=new Array(3);
alphabet[0]=new Letter("a","a","As in UK English \"can\" (short) or UK \"father\", USA \"gone\" (long).\nExamples: \"nghap\" (short) and \"gwlad\" (long)");
alphabet[1]=new Letter("b","b","As in English. Example: \"bychan\".");
alphabet[2]=new Letter("c","k","Always the \"k\" sound as in English \"can\", \n never the \"s\" sound as in city. Example: \"caer\".");
alphabet[3]=new Letter("ch","x","Pronounced as in the Scottish \"loch\" and the composer Bach.");
alphabet[4]=new Letter("d","d","As in English. Example: \"dwyn\". ");
alphabet[5]=new Letter("dd","th","Pronounced \"th\", as in English 'breathe'.\nLike \"th\" in English \"the\", never as in \"think\"");
alphabet[6]=new Letter("e","e","Short as in English \"hen\",or long as in English \"pane\"");
alphabet[7]=new Letter("f","v","Always the 'v' sound as in English 'of' and 'van', never as in 'off'.\nExample: 'Fychan'");
alphabet[8]=new Letter("ff","f","pronounced as an F, as in English 'off' eg: FFestiniog (fest-in-yog)");
alphabet[9]=new Letter("g","g","Pronounced as a hard G, as in English 'get' \nExample: Beddgelert (beth-gell-airt).");
alphabet[10]=new Letter("ng","ng","As ng in 'song', occasionally as in 'finger'\nbut Bangor is pron. 'bang-gor'.");
alphabet[11]=new Letter("h","h","As in English. Example: \"haul\". ");
alphabet[12]=new Letter("i","i","I is like I in \"machine\"");
alphabet[13]=new Letter("l","l","As in English. Example: \"nheulu\". ");
alphabet[14]=new Letter("ll","thl","A breathy 'th' sound that does not occur in English\nRoughly pronounced THL eg: Llanberis (thlan-ber-ris) ");
alphabet[15]=new Letter("m","m","As in English. Example: \"main\". ");
alphabet[16]=new Letter("n","n","As in English. Example: \"main\". ");
alphabet[17]=new Letter("o","o","Short as in English not (never as in book), or long \nas in English robe (never as in groove).Examples:Rhodri, Goch");
alphabet[18]=new Letter("p","p","As in English. Example: \"peidio\". ");
alphabet[19]=new Letter("ph","f","As in English \"phone\".it represents the same sound as \"ff\". \nExample: \"phen\"");
alphabet[20]=new Letter("r","r","Trilled in Welsh as in a Scottish accent and in Spanish and Italian");
alphabet[21]=new Letter("rh","rhi","A breathy mix between 'r' and 'rh' that does not occur \nin English,Aspirated, as in English 'perhaps', but with trilled r.(Rhys)");
alphabet[22]=new Letter("s","s","Always as in English sit, never as in nose.");
alphabet[23]=new Letter("t","t","As in English. Example: \"twp\". ");
alphabet[24]=new Letter("th","th","A softer sound than for \"dd,\" as in \"thick\" (Arthur)");
alphabet[25]=new Letter("u","u","A short 'ih' sound (Gruffydd), or a long 'ee' sound \n(Cymru—pronounced 'kumree')");
alphabet[26]=new Letter("w","w","As a consonant, it is an English 'w' (Llywelyn)\nas a vowel, an 'oo' sound (Bwlch)\nPronounced as an OO, as in English 'swoon' \neg: Llanrwst (thlan-roost)");
alphabet[27]=new Letter("y","y","the only letter in which Welsh is not phonetic. \nIt can be an 'ih' sound, as in 'Gwyn,' is often an 'uh' sound (Cymru), and at the end of the word \nis an 'ee' sound (thus, both Cymru-the modern word for Wales and Cymry-the word\n for Wales in the Dark Ages-are pronounced 'kumree')");

var numbers=new Array(11);
numbers[0]=new Question("zero", "dim");
numbers[1]=new Question("one", "un");
numbers[2]=new Question("two", "dau");
numbers[3]=new Question("three", "tri");
numbers[4]=new Question("four", "pedwar");
numbers[5]=new Question("five", "pum");
numbers[6]=new Question("six", "chwe");
numbers[7]=new Question("seven", "saith");
numbers[8]=new Question("eight", "wyth");
numbers[9]=new Question("nine", "naw");
numbers[10]=new Question("ten", "deg");
numbers[11]=new Question("eleven", "un ar ddeg");
numbers[12]=new Question("twelve", "deuddeg");
numbers[13]=new Question("thirteen", "tri ar ddeg");
numbers[14]=new Question("fourteen", "pedwar ar ddeg");
numbers[15]=new Question("fifteen", "pymtheg");
numbers[16]=new Question("sixteen", "un ar bymtheg");
numbers[17]=new Question("seventeen", "dau ar bymtheg");
numbers[18]=new Question("eighteen", "deunaw");
numbers[19]=new Question("nineteen", "pedwar ar bymtheg");
numbers[20]=new Question("twenty", "ugain");

var weekday=new Array(7);
weekday[0]=new Question("Sunday","Dydd Sul");
weekday[1]=new Question("Monday","Dydd Llun");
weekday[2]=new Question("Tuesday","Dydd Mawrth");
weekday[3]=new Question("Wednesday","Dydd Mercher");
weekday[4]=new Question("Thursday","Dydd Iau");
weekday[5]=new Question("Friday","Dydd Gwener");
weekday[6]=new Question("Saturday","Dydd Sadwrn");
var month=new Array(12);
month[0]=new Question("January","Ionawr");
month[1]=new Question("February","Chwefror");
month[2]=new Question("March","Mawrth");
month[3]=new Question("April","Ebrill");
month[4]=new Question("May","Mai");
month[5]=new Question("June","Mehefin");
month[6]=new Question("July","Gorffenaf");
month[7]=new Question("August","Awst");
month[8]=new Question("September","Medi");
month[9]=new Question("October","Hydref");
month[10]=new Question("November","Tachwedd");
month[11]=new Question("December","Rhagfyr");

 //var words=new Array();
 
 
function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
		
		function iscardOne(){
			
			if (mousex>=10 && mousex<=160 && mousey>=150 && mousey<=270) {
	 	//document.style.cursor="pointer";
		//alert("You clicked first box");
		 document.getElementById("first").checked=true;
		$("#play").click();
			
		}
			
		}
		
		function iscardTwo(){
			
			if (mousex>=170 && mousex<=320 && mousey>=150 && mousey<=270) {
				//alert("You clicked on second box");
	 	 		document.getElementById("second").checked=true;
				$("#play").click();
			 
			}
		}
		
		function iscardThree(){
			
			if (mousex>=330 && mousex<=480 && mousey>=150 && mousey<=270) {
				//alert("You clicked on third box");
	 	 		document.getElementById("third").checked=true;
				$("#play").click();
			 
			}
		}
		
		function isHelp(){
			  
				//$('#timeexpired').countdown('pause'); 	if i put these in the start game the lift off function 
			var message="\"Welsh Teacher\" Help instructions\nUse mouse to choose one of the three boxes and answer questions!\nYou can of course use completely just keyboard\nEnter: to play next question or play again\n1: to pick left box\n2: to pick center box\n3: to pick right box\nEsc: to end the game\nN: to change your name\nH: to see this help box\nTip: for each level you have to answer correctly at 75% of the questions otherwize you have to\nstart the level from scratch";
			alert(message);
			//document.location.href="help.html";
			//$('#timeexpired').countdown('resume');	will be called after here 
			 
		}
		
	function isonCard(mouse_event){
		var bounding_box=canv.getBoundingClientRect();
	
         mousex=(mouse_event.clientX-bounding_box.left) *
                             (canv.width/bounding_box.width);	
         mousey=(mouse_event.clientY-bounding_box.top) *
				(canv.height/bounding_box.height);	
				 
	if (mousex>=10 && mousex<=160 && mousey>=150 && mousey<=270) {
	 	iscardOne();
		return true;
	}
	 else if (mousex>=170 && mousex<=320 && mousey>=150 && mousey<=270) {
	 	iscardTwo();
		
		return true;
	}
	
	else if (mousex>=330 && mousex<=480 && mousey>=150 && mousey<=270) {
	 	iscardThree();
		
		return true;
	}
	else if (mousex>=560 && mousey<=40) {
	 	isHelp();
		
		return true;
	}
	else if (mousex>=470 && mousex<=590 && mousey>=45 && mousey<=65) {
			 changeName();
	 		return true;
	}
	
	return false;
}

function checkBrowser(answer){
	
	var browserString = navigator.appName;
if (browserString == "Netscape") {
// Do something for Netscape/Mozilla here
//alert ("Long live the lizard.");

document.getElementById("sound").setAttribute('src', './files/'+answer+'.ogg');
 document.getElementById("sound").setAttribute('type', 'audio/ogg');

} else if (browserString == "Microsoft Internet Explorer") {
// Do something for Microsoft here
document.getElementById("sound").setAttribute('src', './files/'+answer+'.mp3');
 document.getElementById("sound").setAttribute('type', 'audio/mp3');
//alert("Internet Explorer mate :(");
$("#progressbar").remove();
} else {
// The browser is not one of the major two
alert("Why must you always be so different?");
}
//document.getElementById("sound").play();
}

function resetHighscore(){
	
localStorage.highscore=0;	
sessionStorage.score=0;
}

function drawMultilineText(texta){
		//canv.width=canv.width;
    // set context and formatting  
  
    //ctx.font="22px Times New Roman";
    //ctx.textAlign = "center";
    //ctx.textBaseline = "top";
   ctx.fillStyle = "#ffffff";
   ctx.fillStroke="#000000";
	 // prepare textarea value to be drawn as multiline text.
    //var textval = document.getElementById("textarea").value;
    var textvalArr = toMultiLine(texta);
    var linespacing = 25;
    var x = 3;
    var y = 245;

    // draw each line on canvas.
	
    for(var i = 0; i < textvalArr.length; i++){
		//alert( textvalArr[i]);
        ctx.fillText(textvalArr[i], x, y);
        y += linespacing;
    }
}

// Creates an array where the <br/> tag splits the values.
function toMultiLine(text){
  //alert(text.length*22);
   var textArr = new Array(); 
   text = text.replace(/\n\r?/g, '<br />');
   textArr = text.split("<br />");
   return textArr;
}

var questions=new Array(alphabet, numbers,month,weekday);
	
//document ready functions and listeners
 $(document).ready(function()
{
  sessionStorage.score=0;
 var shortly = new Date(); 
	$('#timeexpired').countdown({format: 'S',  until: shortly, onExpiry: liftOff, onTick: watchCountdown}); 
     
$('#play').click(function() { 
			 
    var selected;
	var x=document.getElementsByName("answer");
	for(var i=0;i<x.length;i++){
		
		if(x[i].checked==true){
			selected=x[i].value;
			continue;	
		}
	}
     
	 if(selected==questions[lvl][num].getAnswer()){
		    checkBrowser('correct');
			document.getElementById("sound").play();	
		   $('#timeexpired').countdown('pause'); 
		   updateScore();
		  Right();
		   var correct_img=new Image();
			correct_img.src="./images/correct.png";
			ctx.drawImage(correct_img,250,110);
	 }else{
		 checkBrowser('wrong');
		  document.getElementById("sound").play();	
		 $('#timeexpired').countdown('pause'); 
		 updateScore();
		  Wrong();
		   var wrong_img=new Image();
			wrong_img.src="./images/wrong.png";
			ctx.drawImage(wrong_img,250,110);
	 }
	 
	 
	 $('#timeexpired').removeClass('highlight');
	 
	  answer();
		
});

function Wrong(){
ctx.fillText("You answered wrong",210,105);
	
}

function answer(){
	if(lvl==questions.length-1 && num==questions[lvl].length-1){
		endGame();
		
	}else{
	document.getElementById("play").disabled=true;
	  ctx.font="22px Times New Roman";
	  if(lvl==0){
		   ctx.fillText("Answer is: "+questions[lvl][num].getAnswer(),03,210);
	 	   drawMultilineText(questions[lvl][num].getDescription());
		
	  }else{
		  ctx.fillText("Answer is: "+questions[lvl][num].getAnswer(),03,210);
	  }
	  //alert("You have to answer at to least "+howMany()+" of "+questions[lvl].length+" questions on this level in order to progress");
	  var next_img=new Image();
			next_img.src="./images/next question.png";
			ctx.drawImage(next_img,450,65);
	 //window.focus();
	 num++;
	 if(num==questions[lvl].length){
		var nom=Number(sessionStorage.score)-Number(tempscore);
		if(nom>=howMany()){
			lvl++;
			tempscore=tempscore+Number(sessionStorage.score);
			//sessionStorage.score=0;
			
			num=0;
		}else{
			alert("You have to answer at to least "+howMany()+" of "+questions[lvl].length+" questions on this level in order to progress");
			sessionStorage.score=tempscore;
			num=0;
		}
		
	 }
	 
	 
		document.removeEventListener("keydown",chooseCard,false);
		document.addEventListener("keydown",pressaKey,false);
		canv.removeEventListener("click",youclicked,false);
		canv.addEventListener("click",nextHand,false);
		
	}
}

function Right(){

	 	ctx.fillText("You answered right",210,105);
		sessionStorage.score++;
		if(Number(sessionStorage.score)>Number(localStorage.highscore)){
		 	 
		 	localStorage.highscore=Number(sessionStorage.score);
			 
		 }
}


function howMany(){
	
	var howmany=0.75*questions[lvl].length;
	 
	return Math.round(howmany);
}

function liftOff() { 
     
	 //alert("time is up");
	 checkBrowser('time_up');
	 document.getElementById("sound").play();
	 canv.width=canv.width;
	 updateScore();
	 ctx.fillText("Time is up",250,110);
		answer();
	 
	   
}

function watchCountdown(periods) { 
	//console.log(periods[6]);
    if ($.countdown.periodsToSeconds(periods) == 7) { 
         //$(this).wrap("<mark></mark>");
		 checkBrowser('Go');
		 document.getElementById("sound").play();
		$(this).addClass('highlight');
    } 
	if(navigator.appName != "Microsoft Internet Explorer"){
		 $('#progressbar').val(periods[6]);
		 
	}
}

});
 
function changeName(){
	
	var yourname=prompt("Enter your name my friend!at least 3 and maximum 7 symbols");
		if(yourname.length>=3 && yourname.length<=7){
			localStorage.playername=yourname;
		}else{
			localStorage.playername="guest";	
		}
	 
	startGame();
}

if(typeof(Storage)!=="undefined")
  {
  if(localStorage.highscore==null){
  
  	localStorage.highscore=0;
	}
	if (sessionStorage.score==null)
    {
    sessionStorage.score=0;
    }
  if (localStorage.playername==null)
    {
		changeName();
		 
    }
  
  }
else
  {
   alert("Sorry, your browser does not support web storage...If you want to use highscore system in this game please update it");
  }
