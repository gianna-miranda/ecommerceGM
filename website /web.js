function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
 

var video = document.getElementById("myVideo");


var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play() ;
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
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
}
//about us slideshow//
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
  setTimeout(carousel, 4000);    
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
;( function( $, window, undefined ) {

	'use strict';

	$.CatSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.CatSlider.prototype = {

		_init : function( options ) {

			// the categories (ul)
			this.$categories = this.$el.children( 'ul' );
			// the navigation
			this.$navcategories = this.$el.find( 'nav > a' );
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			// animations and transforms support
			this.support = Modernizr.csstransforms && Modernizr.cssanimations;
			// if currently animating
			this.isAnimating = false;
			// current category
			this.current = 0;
			var $currcat = this.$categories.eq( 0 );
			if( !this.support ) {
				this.$categories.hide();
				$currcat.show();
			}
			else {
				$currcat.addClass( 'mi-current' );
			}
			// current nav category
			this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
			// initialize the events
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;
			this.$navcategories.on( 'click.catslider', function() {
				self.showCategory( $( this ).index() );
				return false;
			} );

			// reset on window resize..
			$( window ).on( 'resize', function() {
				self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
				self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
				self.current = 0;
			} );

		},
		showCategory : function( catidx ) {

			if( catidx === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// update selected navigation
			this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );

			var dir = catidx > this.current ? 'right' : 'left',
				toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
				fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
				// current category
				$currcat = this.$categories.eq( this.current ),
				// new category
				$newcat = this.$categories.eq( catidx ),
				$newcatchild = $newcat.children(),
				lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
				self = this;

			if( this.support ) {

				$currcat.removeClass().addClass( toClass );
				
				setTimeout( function() {

					$newcat.removeClass().addClass( fromClass );
					$newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

						$( this ).off( self.animEndEventName );
						$newcat.addClass( 'mi-current' );
						self.current = catidx;
						var $this = $( this );
						// solve chrome bug
						self.forceRedraw( $this.get(0) );
						self.isAnimating = false;

					} );

				}, $newcatchild.length * 90 );

			}
			else {

				$currcat.hide();
				$newcat.show();
				this.current = catidx;
				this.isAnimating = false;

			}

		},
		// based on http://stackoverflow.com/a/8840703/989439
		forceRedraw : function(element) {
			if (!element) { return; }
			var n = document.createTextNode(' '),
				position = element.style.position;
			element.appendChild(n);
			element.style.position = 'relative';
			setTimeout(function(){
				element.style.position = position;
				n.parentNode.removeChild(n);
			}, 25);
		}

	}

	$.fn.catslider = function( options ) {
		var instance = $.data( this, 'catslider' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
			});
		}
		return instance;
	};

} )( jQuery, window );
//products slider//
$(function() {
  $('#mi-slider').catslider();
});
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