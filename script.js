var isDate = function (input) {
  //   write your code here
	return isDate instanceof Date && isNaN(isDate);
	    
};   
 
// Do not change the code below.

const input = prompt("Enter Date.");
alert(isDate(input)); 
 