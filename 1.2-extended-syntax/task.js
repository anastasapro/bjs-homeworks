"use strict";
function getResult(a,b,c){
    let x = [];
	let d = Math.pow(b,2) - 4 * a * c;
	if (d === 0){
		x[0] = (-b / (2 * a));
	}
	else if (d > 0){
		x[0] = ((-b - Math.sqrt(d)) /( 2 * a));
		x[1] = ((-b + Math.sqrt(d)) / (2 * a));
	}
	else{
	    x = [];	
	}
	return x;
}

// вторая задача

function getAverageMark(marks){
	if (marks.length > 5) {
		marks.splice(5);
	} else if (marks.length == 0) {
	return 0;
	} 
	let sum = 0;
	let averageMark = 0;
	for (let i = 0; i < marks.length; i++){
    sum += marks[i];
	}
	averageMark = sum/marks.length;
	return averageMark;	
}

//третья задача

function askDrink(name,dateOfBirthday){
		if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) < 18) {
		return ("Сожалею, " + "," + name + " но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!" );
	 } else { 
		return ("Не желаете ли олд-фэшн, " + name);
	 }
}
	
   
    