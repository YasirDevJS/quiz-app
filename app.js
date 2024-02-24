var userName = prompt("Enter your name..");
		var quiz_1 = parseInt(prompt("21+5=?"));
		var quiz_2 = parseInt(prompt("18-9=?"));
		var quiz_3 = parseInt(prompt("6*2=?"));
		var quiz_4 = parseInt(prompt("9/3=?"));
		var quiz_5 = parseInt(prompt("18-6+12"));
		document.getElementById("name").innerHTML = userName; 
		document.getElementById("ans_1").innerHTML = quiz_1;
		document.getElementById("ans_2").innerHTML = quiz_2;
		document.getElementById("ans_3").innerHTML = quiz_3;
		document.getElementById("ans_4").innerHTML = quiz_4;
		document.getElementById("ans_5").innerHTML = quiz_5;
		
		var correctAns = [21+5,18-9,6*2,9/3,18-6+12];
		document.getElementById("c-ans_0").innerHTML = correctAns[0];
		document.getElementById("c-ans_1").innerHTML = correctAns[1];
		document.getElementById("c-ans_2").innerHTML = correctAns[2];
		document.getElementById("c-ans_3").innerHTML = correctAns[3];
		document.getElementById("c-ans_4").innerHTML = correctAns[4];
		if(quiz_1 === correctAns[0]) {
			document.getElementById("check_0").innerHTML = "Correct";
			var mark_1 = 20;
		}
		else {
		 	document.getElementById("check_0").innerHTML = "Incorrect";
			var mark_1 = 0;		
		}
		if(quiz_2 === correctAns[1]) {
			document.getElementById("check_1").innerHTML = "Correct";
			var mark_2 = 20;
		}
		else {
		 	document.getElementById("check_1").innerHTML = "Incorrect";		
			var mark_2 = 0;
		}
		if(quiz_3 === correctAns[2]) {
			document.getElementById("check_2").innerHTML = "Correct";
			var mark_3 = 20;
		}
		else {
		 	document.getElementById("check_2").innerHTML = "Incorrect";		
			var mark_3 = 0;
		}
		if(quiz_4 === correctAns[3]) {
			document.getElementById("check_3").innerHTML = "Correct";
			var mark_4 = 20;
		}
		else {
		 	document.getElementById("check_3").innerHTML = "Incorrect";		
			var mark_4 = 0;
		}
		if(quiz_5 === correctAns[4]) {
			document.getElementById("check_4").innerHTML = "Correct";
			var mark_5 = 20;
		}
		else {
		 	document.getElementById("check_4").innerHTML = "Incorrect";		
			var mark_5 = 0;
		}
		var obtainMarks = mark_1 + mark_2 + mark_3 + mark_4 + mark_5;
		var total = 100;
		var percentage = (obtainMarks/ total) * 100;
		document.getElementById("percentage").innerHTML = percentage + 	"%";
		