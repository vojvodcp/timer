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
});
