

function add(){
	var a = document.getElementById("first_number").value;
	var b = document.getElementById("second_number").value;
	var c = parseInt(a)+parseInt(b);
	document.getElementById("out_put").innerHTML = c; //display output directly in webpage
	alert(c);
}

function yearcheck(){
	var year = document.getElementById("leap_year").value;
var yyyy=(year % 100 === 0) ? (year % 400 === 0) : (year%4===0);
alert(yyyy);
}


//multiplying two numbers and displaying result
function multiply(){
var d = document.getElementById("first_input").value;
	var e = document.getElementById("second_input").value;
	var f = parseInt(d)*parseInt(e);
	alert(f);
}

//dividing two numbers and displaying result
function divide(){
	var g = document.getElementById("third_input").value;
	var h = document.getElementById("fourth_input").value;
	var i = (parseInt(g)/parseInt(h));
	alert(i);

}
