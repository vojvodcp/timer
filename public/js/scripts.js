$(function(){
        $('#post-comment').hide();
    	$('#btn-comment').on('click', function(event) {
        	event.preventDefault();

        	$('#post-comment').show();
   	});

	$('#btn-like').on('click', function(event) {
	    event.preventDefault();

	    var imgId = $(this).data('id');

	    $.post('/images/' + imgId + '/like').done(function(data) {
		$('.likes-count').text(data.likes);
	    });
	});

});


// timer javascript because idk where else to put it

// When button is clicked
$(document).ready(function() {
	var countDownUntil;
	var h = $("#timer1 > .hours").val(00);
	var m = $("#timer1 > .minutes").val(00);
	var s = $("#timer1 > .seconds").val(00);
	var pause = false;
	$("#button1").on('click', function() {
		if (!pause) {
			pause = true;
			// timer go
			console.log("go");
			// get date
			h = $("#timer1 > .hours").val();
			m = $("#timer1 > .minutes").val();
			s = $("#timer1 > .seconds").val();
			var timerAmount = (h * 3600000) + (m * 60000) + (s * 1000);
			countDownUntil = new Date().getTime() + timerAmount;
			console.log(countDownUntil);
			// Update every second
			var x = setInterval(function() {
				// Get current date and time
				var now = new Date().getTime();
				console.log("now: " + now);
				console.log("to: " + countDownUntil);
				console.log(pause);
				// Find the remaining time between 
				var remaining = countDownUntil - now;
				// Time calculations for days, hours, minutes and seconds
				var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
				var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
				// display remaining time	
				$("#timer1 > .hours").val(hours);
				$("#timer1 > .minutes").val(minutes);
				$("#timer1 > .seconds").val(seconds);
				// when countdown finished, change look etc
				if (remaining <= 0) {
					$("#timer1 > .hours").val(0);
					$("#timer1 > .minutes").val(0);
					$("#timer1 > .seconds").val(0);
					$("#timer1Box").css("background-color", "red");
				}
			}, 1000);
		} else {
			pause = false;
			console.log("stop");
			// get value of timer and store for resuming later
			h = $("#timer1 > .hours").val();
			m = $("#timer1 > .minutes").val();
			s = $("#timer1 > .seconds").val();
			countDownUntil = 0;
			h = $("#timer1 > .hours").val(h);
			m = $("#timer1 > .minutes").val(m);
			s = $("#timer1 > .seconds").val(s);
			clearInterval(x);
		}
	});
	
	var countDownUntil2;
	var h2 = $("#timer2 > .hours2").val(00);
	var m2 = $("#timer2 > .minutes2").val(00);
	var s2 = $("#timer2 > .seconds2").val(00);
	var pause2 = false;
	$("#button2").on('click', function() {
		if (!pause2) {
			pause2 = true;
			// timer go
			console.log("go");
			// get date
			h2 = $("#timer2 > .hours2").val();
			m2 = $("#timer2 > .minutes2").val();
			s2 = $("#timer2 > .seconds2").val();
			var timerAmount2 = (h2 * 3600000) + (m2 * 60000) + (s2 * 1000);
			countDownUntil2 = new Date().getTime() + timerAmount2;
			console.log(countDownUntil2);
			// update every second
			var x2 = setInterval(function() {
				// get current date and time
				var now2 = new Date().getTime();
				console.log("now: " + now2);
				console.log("to: " + countDownUntil2);
				console.log(pause2);
				// Find the remaining time between 
				var remaining2 = countDownUntil2 - now2;
				// calculate hours, minutes and seconds
				var hours2 = Math.floor((remaining2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes2 = Math.floor((remaining2 % (1000 * 60 * 60)) / (1000 * 60));
				var seconds2 = Math.floor((remaining2 % (1000 * 60)) / 1000);
				// display remaining time	
				$("#timer2 > .hours2").val(hours2);
				$("#timer2 > .minutes2").val(minutes2);
				$("#timer2 > .seconds2").val(seconds2);
				// when countdown finished, change look etc
				if (remaining2 <= 0) {
					$("#timer2 > .hours2").val(0);
					$("#timer2 > .minutes2").val(0);
					$("#timer2 > .seconds2").val(0);
					$("#timer2Box").css("background-color", "red");
				}
			}, 1000);
		} else {
			pause2 = false;
			console.log("stop");
			// get value of timer and store for resuming later
			h = $("#timer2 > .hours2").val();
			m = $("#timer2 > .minutes2").val();
			s = $("#timer2 > .seconds2").val();
			countDownUntil2 = 0;
			h = $("#timer2 > .hours2").val(h2);
			m = $("#timer2 > .minutes2").val(m2);
			s = $("#timer2 > .seconds2").val(s2);
			clearInterval(x2);
		}
	});
	
	var countDownUntil3;
	var h3 = $("#timer3 > .hours3").val(00);
	var m3 = $("#timer3 > .minutes3").val(00);
	var s3 = $("#timer3 > .seconds3").val(00);
	var pause3 = false;
	$("#button3").on('click', function() {
		if (!pause3) {
			pause3 = true;
			// timer go
			console.log("go");
			// get date
			h3 = $("#timer3 > .hours3").val();
			m3 = $("#timer3 > .minutes3").val();
			s3 = $("#timer3 > .seconds3").val();
			var timerAmount3 = (h3 * 3600000) + (m3 * 60000) + (s3 * 1000);
			countDownUntil3 = new Date().getTime() + timerAmount3;
			console.log(countDownUntil3);
			// update every second
			var x3 = setInterval(function() {
				// get current date and time
				var now3 = new Date().getTime();
				console.log("now: " + now3);
				console.log("to: " + countDownUntil3);
				console.log(pause3);
				// Find the remaining time between 
				var remaining3 = countDownUntil3 - now3;
				// calculate hours, minutes and seconds
				var hours3 = Math.floor((remaining3 % (1000 * 60 * 60 * 34)) / (1000 * 60 * 60));
				var minutes3 = Math.floor((remaining3 % (1000 * 60 * 60)) / (1000 * 60));
				var seconds3 = Math.floor((remaining3 % (1000 * 60)) / 1000);
				// display remaining time	
				$("#timer3 > .hours3").val(hours3);
				$("#timer3 > .minutes3").val(minutes3);
				$("#timer3 > .seconds3").val(seconds3);
				// when countdown finished, change look etc
				if (remaining3 <= 0) {
					$("#timer3 > .hours3").val(0);
					$("#timer3 > .minutes3").val(0);
					$("#timer3 > .seconds3").val(0);
					$("#timer3Box").css("background-color", "red");
				}
			}, 1000);
		} else {
			pause3 = false;
			console.log("stop");
			// get value of timer and store for resuming later
			h = $("#timer3 > .hours3").val();
			m = $("#timer3 > .minutes3").val();
			s = $("#timer3 > .seconds3").val();
			countDownUntil3 = 0;
			h = $("#timer3 > .hours3").val(h3);
			m = $("#timer3 > .minutes3").val(m3);
			s = $("#timer3 > .seconds3").val(s3);
			clearInterval(x3);
		}
	});
});
