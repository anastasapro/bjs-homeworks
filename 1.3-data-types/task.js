"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let percentNumber = parseFloat(percent);
  let contributionNumber = parseFloat(contribution);
  let amountNumber = parseFloat(amount);
  if (isNaN(percentNumber)) {
	  return `процентная ставка сожержит неверное значение "${percent}"`;
  } else if (isNaN(contributionNumber)) {
	  return `сумма первоначального взноса сожержит неверное значение "${contribution}"`;
  } else if  (isNaN(amountNumber)){ 
	  return `сумма кредита сожержит неверное значение "${amount}"`;
  }
      let P = percentNumber / 100 / 12;
	  let n = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
	  let totalAmount = ((amountNumber - contributionNumber) * (P + P / (((1 + P) ** n) - 1))) * n;
	  console.log(totalAmount);
	  return totalAmount.toFixed(2);
  }
	  
  



function getGreeting(name) {
	if (name === ""){
	return ("Привет, мир! Меня зовут Аноним");
	}else { 
		return ("Привет, мир! Меня зовут " + name);
	 }
}	
   