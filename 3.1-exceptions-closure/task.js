"use strict";
function parseCount(count){
  const result = Number.parseInt(count);
  if (isNaN(result)){
    throw new Error('Невалидное значение');
}
  return result;

}	


function validateCount(count){
  try {
      return parseCount(count);
  } catch(error) {
      return error;      
  }
}
	
class Triangle {
  constructor(one, two, three){
  this.one = one;
  this.two = two;
  this.three = three;
	 
  if ((this.one + this.two <= this.three) || (this.one + this.three <= this.two) || (this.two + this.three <= this.one)){
    throw new Error('Треугольник с такими сторонами не существует');
    }
	}

  getPerimeter() {
    return Number.parseFloat((this.one + this.two + this.three).toFixed(3));
	}
  
  getArea() {
	const p = this.getPerimeter() / 2;
    return Number.parseFloat(((p * (p - this.one) * (p - this.two) * (p - this.three))**0.5).toFixed(3));
   }
	
}

  function getTriangle(one, two, three) {
	try {
    return new Triangle(one, two, three);
    } catch(error) {
	const erText =  'Ошибка! Треугольник не существует'; 
	return {
		getArea:() => erText, getPerimeter:() => erText
	}    	
  }
  }
  






