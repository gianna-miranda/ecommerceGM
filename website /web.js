function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
 

var video = document.getElementById("myVideo");


var btn = document.getElementById("myBtn");


// automatic slideshow//
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
/*About us*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
	moreText.style.display = "inline";
  }
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
/*product pg slider*/
// movement pg -form--//
$("form").submit(e => {
	e.preventDefault();
  
	const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  
	// push a JSON object with the answers to the survey-maker backend
	const results = {
	  AdditionalLangs: $("#otherlangs").val(),
	  BestDayAndTimes: days.map(day => $(`input[name=${day}]:checked`).val()),
	  CodeLanguages: [...$("input[id^=langs]:checked")].map(el => el.value),
	  ContactInfo: $("#contact").val(),
	  ContributeToProjects: $("input[name=project-contribute]:checked").val(),
	  FutureTopicSuggestions: $("input[id=future-topics]").val(),
	  LastEventEnjoyed: $("input[name=enjoy-last-event]:checked").val(),
	  LastEventFeedback: $("input[id=venuefeedback]").val(),
	  LastEventFound: $("input[id=find-last-event]").val(),
	  LastEventVenue: [...$("input[id^=venue]:checked")].map(el => el.value),
	  MakeNextEventBetter: $("input[id=make-event-better]").val(),
	  PositiveChange: $("input[name=positive-change]:checked").val(),
	  ServerSideDev: $("input[name=server-side-dev]:checked").val(),
	  ShareYourProjects: $("input[name=personal-project-share]:checked").val(),
	  Survey: "NodeSchool",
	  UpcomingEventInterest: $("input[name=enjoy-next-event]:checked").val(),
	  Volunteer: [...$("input[id^=volunteer]:checked")].map(el => el.value),
	  YearsDeveloping: $("input[name=dev-years]:checked").val(),
	};
  
	$.ajax({
	  // TODO: https://github.com/nodeschool/bainbridge/issues/11
	  url: "",
	  type: "POST",
	  crossDomain: true,
	  data: JSON.stringify(results),
	  dataType: "json"
	})
	  .done(response => {
		// Set a cookie so we can hide the survey button on the main web page if completed
		localStorage ? localStorage.setItem("survey", "completed") : $.cookie("survey", "completed");
		window.history.back().reload();
	  })
	  .fail((xhr, status) => $("#error-modal").openModal());
  });
  //Survey pg//
  $("form").submit(e => {
	e.preventDefault();
  
	const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  
	// push a JSON object with the answers to the survey-maker backend
	const results = {
	  AdditionalLangs: $("#otherlangs").val(),
	  BestDayAndTimes: days.map(day => $(`input[name=${day}]:checked`).val()),
	  CodeLanguages: [...$("input[id^=langs]:checked")].map(el => el.value),
	  ContactInfo: $("#contact").val(),
	  ContributeToProjects: $("input[name=project-contribute]:checked").val(),
	  FutureTopicSuggestions: $("input[id=future-topics]").val(),
	  LastEventEnjoyed: $("input[name=enjoy-last-event]:checked").val(),
	  LastEventFeedback: $("input[id=venuefeedback]").val(),
	  LastEventFound: $("input[id=find-last-event]").val(),
	  LastEventVenue: [...$("input[id^=venue]:checked")].map(el => el.value),
	  MakeNextEventBetter: $("input[id=make-event-better]").val(),
	  PositiveChange: $("input[name=positive-change]:checked").val(),
	  ServerSideDev: $("input[name=server-side-dev]:checked").val(),
	  ShareYourProjects: $("input[name=personal-project-share]:checked").val(),
	  Survey: "NodeSchool",
	  UpcomingEventInterest: $("input[name=enjoy-next-event]:checked").val(),
	  Volunteer: [...$("input[id^=volunteer]:checked")].map(el => el.value),
	  YearsDeveloping: $("input[name=dev-years]:checked").val(),
	};
  
	$.ajax({
	  // TODO: https://github.com/nodeschool/bainbridge/issues/11
	  url: "",
	  type: "POST",
	  crossDomain: true,
	  data: JSON.stringify(results),
	  dataType: "json"
	})
	  .done(response => {
		// Set a cookie so we can hide the survey button on the main web page if completed
		localStorage ? localStorage.setItem("survey", "completed") : $.cookie("survey", "completed");
		window.history.back().reload();
	  })
	  .fail((xhr, status) => $("#error-modal").openModal());
  });
}
