var isDate = function (input) {
  //   write your code here
	if(input == "new Date()" || input="new Date(year,month,day)"){
		return true;
	}
	else{
		return false;  
	}
};   
 
// Do not change the code below.

const input = prompt("Enter Date.");
alert(isDate(input)); 
 