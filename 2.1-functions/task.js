//первая
function getSolutions(a, b, c) {	
  let d = Math.pow(b,2) - 4 * a * c;
  let roots = [];
	if (d < 0){
	  return {
	    D: d, 
	    roots: []
	  };
	} else if (d === 0){
	  let x1 = -b / (2 * a);
	  return {
	    D: d, 
	    roots: [x1]
	  };
	} else if (d > 0){
	  let x1 = ((-b - Math.sqrt(d)) / ( 2 * a));
	  let x2 = ((-b + Math.sqrt(d)) / (2 * a));
	  return {
	    D: d, 
		roots: [x2,x1]
	  };
	}
}
function showSolutionsMessage(a, b, c){
  let result = getSolutions(a, b, c);
	console.log (`Вычисляем корни квадратного уравнения ${a}x**2 + ${b}x + ${c}`);
	console.log (`Значение дискриминанта: ${result.D}`);
	  if (result.D < 0) {
	    console.log ("Уравнение не имеет вещественных корней");
	  } else if (result.D === 0){
	    console.log (`Уравнение имеет один корень. X₁ = ${result.roots[0]}`);		
	  }
	    else if (result.D > 0){	 
	    console.log (`Уравнение имеет два корня.X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	  }
}

//третья

function getPersonData(secretData) {
  let firstName;
  let lastName;
  firstName = getDecodedValue(secretData.aaa);
  lastName = getDecodedValue(secretData.bbb);
  return {
    firstName, 
	lastName
  }	
}

function getDecodedValue(secret) {
  if (secret === 1) {
   return "Эмильо";
  } else if (secret === 0) {
   return "Родриго";
  }
}

//вторая

function getAverageMark(marks) {
  if (marks.length === 0) {
  return 0;
  } 
  let sum = 0;
	for (let i = 0; i < marks.length; i++) {
      sum += marks[i];		
    }
	return sum / marks.length;
}

function getAverageScore(data) { 
  let result = { average: 0 };
  let sumSubject = 0;
  let n = 0;
  for (let pro in data) {
    n++;
    result[pro] = getAverageMark(data[pro]);
	sumSubject += result[pro]; 
  }
	if (n != 0){
	result.average = sumSubject / n;
} 
   return result;
}
