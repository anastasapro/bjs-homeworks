//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
  let str = this.replace(/[\s!-]/g,'').toLowerCase();
  let arr = str.split('');
  let arrreversed = str.split('');
  arrreversed.reverse();
  return (arr.join('') == arrreversed.join('')); 
}


function getAverageMark(marks) {
  if (marks.length === 0) {
  return 0;
  } 
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
      sum += marks[i];		
    }
  let average = sum / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}


function checkBirthday(birthday) {
  let now = Date.now();
  birthday = Date.parse(birthday);
  let diff = now - birthday;
  let age = diff / (86400000 * 365.25);
  return age > 18;
}

