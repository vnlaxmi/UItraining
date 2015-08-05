alert("hello world");
console.log("hai to all");

function SampleFunction()
{
	alert("inside a function");
}
//-----------------------------------------------------------
var today =  new Date();
var day = today.getDay();
var daylist = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(daylist[day]);

//to get current hour informaiton
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
//console.log(daylist[day], ":", hour, minutes, seconds);
// converting into 12 hour format
var ampm = (hour >=12)?"pm" : "am";
hour = (hour>=12)?hour - 12: hour;
if (hour === 0 && ampm === 'pm'){
	if(minutes === 0 && seconds === 0)
	{
		hour=12;
		ampm='Noon';//to check exactly at 12 noon
	}
	else
	{
		hour=12;
		ampm='pm';// to display if it is not exactly 12
	}
}
console.log(daylist[day], ":", hour, minutes, seconds, ampm);
//checking for midnight
if (hour === 0 && ampm === 'am'){
	if(minutes === 0 && seconds === 0)
	{
		hour=12;
		ampm='Midnight';
	}
	else
	{
		hour=12;
		ampm='am';
	}
}
console.log(daylist[day], ":", hour, minutes, seconds, ampm);


// only tried with noon
var today =  new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
//console.log(daylist[day], ":", hour, minutes, seconds);
// converting into 12 hour format
var ampm = (hour >=12)?"pm" : "am";
hour = (hour>=12)?hour - 12: hour;
if (hour === 0 && ampm === 'pm'){
	if(minutes === 0 && seconds === 0)
	{
		hour=12;
		ampm='Noon';//to check exactly at 12 noon coz of not using else statement it is displaying 0 instead of 12.
	}
}	
console.log("Time:", hour, minutes, ampm, ":", seconds, "sec");

//tryed in diff way this method is also sucessfully working
var today =  new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
//console.log(daylist[day], ":", hour, minutes, seconds);
// converting into 12 hour format
var ampm = (hour >=12)?"pm" : "am";
hour = (hour>=12)?hour - 12: hour;
if (hour === 0, ampm === 'pm', minutes === 0, seconds === 0){
		hour=12;
		ampm='Noon';
}
console.log("Time:", hour, minutes, ampm, ":", seconds, "sec");

//display date -----------------------------------
var dd = new Date();
var dat = dd.getDate();
console.log(dat);//displaying day

var dd = new Date();
var days = dd.getDate();
//console.log(days);
var dd = new Date();
var mm = dd.getMonth()+1;// for display in numbers we are adding but want to display in names we have to create array
console.log(days,":", mm);

//display month names
var dd = new Date();
var days = dd.getDate();
var mm = dd.getMonth();
var mmlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//console.log(days, mmlist[mm]);
var yy = dd.getFullYear();
console.log(days+":"+mmlist[mm]+":"+yy)


//check the particular year is leap year or not.
var year = 2016;
var yyyy=(year % 100 === 0) ? (year % 400 === 0) : (year%4===0);
alert(yyyy);


console.log();


//to check every year 1st january is sunday
 
var yy =  2015
var mm = getMonth("january");
var mmlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var day = getDay("1");
var daylist = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
if (yy === "2015", mm === "january", day === 0){
	var result = "january 1st is sunday"
}
else
{
  result = "january 1st is not sunday"
}