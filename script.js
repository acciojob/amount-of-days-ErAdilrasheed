//your JS code here. If required.
function daysOfAYear(year){
	if (year % 4 == 0 && year % 100 != 0) {
		return console.log("366")
	} else if(year % 400 == 0){
		return console.log("366")
	} else{
		return console.log("365")
	}
}
daysOfAYear();
