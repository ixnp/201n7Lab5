//

var userName = prompt('what\'s your name?');
alert ('Hello ' + userName + '. Thanks for coming to my site!');

function question1(){
  var questionOne = prompt('Was I born in India?').toUpperCase();
  console.log(questionOne)
  if (questionOne === 'YES' || questionOne === 'Y'){
    alert('Correct!');
  }else{
    alert('Wrong!');
  }
}
question1()


console.log('Answer 1)Yes, India');


function question2 () {
  var questionTwo = prompt('Is my fav color blue?').toUpperCase();
  if (questionTwo === 'YES' || questionTwo === 'Y'){
    alert('Correct!');
  }else
  {
    alert('Wrong!');
  }
}
question2()

console.log('Answer 2)Yes, blue');

function question3 () {
  var questionThree = prompt('do I like Apple products?').toUpperCase();
  if (questionThree === 'YES' || questionThree === 'Y'){
    alert('Correct!');
  }else{
    alert('Wrong!');
  }
}
question3()

console.log('Answer 3)Yes, I do like Apple products')


 function question4() {
var questionFour = prompt('do I have hobbies?').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y'){
  alert('Correct!');
}else{
  alert('Wrong!')
}
}
question4()

console.log('Answer 4)Yes');

//end of 4 question and answers
 function question5 () {
var questionFive = prompt('Is my hobbie, A) Collecting car\'s?, B) Collecting watche\'s? , or C) Collecting Jordan\'s? ');

if (questionFive === 'B' || questionFive === 'Collecting watche\'s' || questionFive === 'B) Collecting watche\'s' || questionFive === 'B)' || questionFive === 'b') {
  alert('Yes, I do collect watche\'s!');
} else if (questionFive === 'C' || questionFive === 'Collecting Jordan\'s' || questionFive === 'C) Collecting Jordan\'s') {
  alert('Sorry, I hate Jordan\'s');
}else{
  alert('no not yet, but I hope to in the future');
}
}
question5()
console.log('answer B) Collecting watche\'s');

 function question6 () {
var counterSix = 0;
var answerSix = 5;
//create a while loop that allows user 4 tries to get answer6
while (counterSix < 4) {
  counterSix++;
  var questionSix = parseInt(prompt('how many watche\'s are in my collection?'));
  if (counterSix === 4) {
  alert ("too many guess'\s");
  }
  else if (answerSix === questionSix) {
    console.log(answerSix === questionSix);
    alert ("correct!");
    break;
  }
  else if (questionSix < answerSix) {
    alert("too low");
  }
  else if (questionSix > answerSix) {
      alert("too high");
  }
}
}
question6()

 function question7 () {
counterSven = 0;


//create Array for questionSven
var arSven = new Array('seatac','kent');
//create while loop
while(counterSven < 6){
  counterSven++;
  var userQuestion = prompt("Guess cities that I have lived in WA state");

  if (arSven.indexOf(userQuestion) !== -1){
    //console.log(arSven === userQuestion);
    alert("correct");

    break;
  }
  else if (arSven.indexOf(userQuestion) === -1) {
  alert("not correct");
  }
  else if (counterSven === 6) {
    alert("too many guess'\s");
  }
}
 alert("seatac, kent I have lived");
}
question7()//

// var userName = prompt('what\'s your name?');
// alert ('Hello ' + userName + '. Thanks for coming to my site!');
//
// function question1(){
//   var questionOne = prompt('Was I born in India?').toUpperCase();
//   console.log(questionOne)
//   if (questionOne === 'YES' || questionOne === 'Y'){
//     alert('Correct!');
//   }else{
//     alert('Wrong!');
//   }
// }
// question1()
//
//
// console.log('Answer 1)Yes, India');
//
//
// function question2 () {
//   var questionTwo = prompt('Is my fav color blue?').toUpperCase();
//   if (questionTwo === 'YES' || questionTwo === 'Y'){
//     alert('Correct!');
//   }else
//   {
//     alert('Wrong!');
//   }
// }
// question2()
//
// console.log('Answer 2)Yes, blue');
//
// function question3 () {
//   var questionThree = prompt('do I like Apple products?').toUpperCase();
//   if (questionThree === 'YES' || questionThree === 'Y'){
//     alert('Correct!');
//   }else{
//     alert('Wrong!');
//   }
// }
// question3()
//
// console.log('Answer 3)Yes, I do like Apple products')
//
//
//  function question4() {
// var questionFour = prompt('do I have hobbies?').toUpperCase();
// if (questionFour === 'YES' || questionFour === 'Y'){
//   alert('Correct!');
// }else{
//   alert('Wrong!')
// }
// }
// question4()
//
// console.log('Answer 4)Yes');
//
// //end of 4 question and answers
//
//
//
//
//
//  function question5 () {
// var questionFive = prompt('Is my hobbie, A) Collecting car\'s?, B) Collecting watche\'s? , or C) Collecting Jordan\'s? ');
//
// if (questionFive === 'B' || questionFive === 'Collecting watche\'s' || questionFive === 'B) Collecting watche\'s' || questionFive === 'B)' || questionFive === 'b') {
//   alert('Yes, I do collect watche\'s!');
// } else if (questionFive === 'C' || questionFive === 'Collecting Jordan\'s' || questionFive === 'C) Collecting Jordan\'s') {
//   alert('Sorry, I hate Jordan\'s');
// }else{
//   alert('no not yet, but I hope to in the future');
// }
// }
// question5()
//
// console.log('answer B) Collecting watche\'s');
//
//
//
//  function question6 () {
// var counterSix = 0;
// var answerSix = 5;
// //create a while loop that allows user 4 tries to get answer6
// while (counterSix < 4) {
//   counterSix++;
//   var questionSix = parseInt(prompt('how many watche\'s are in my collection?'));
//   if (counterSix === 4) {
//   alert ("too many guess'\s");
//   }
//   else if (answerSix === questionSix) {
//     console.log(answerSix === questionSix);
//     alert ("correct!");
//     break;
//   }
//   else if (questionSix < answerSix) {
//     alert("too low");
//   }
//   else if (questionSix > answerSix) {
//       alert("too high");
//   }
// }
// }
// question6()
//
//  function question7 () {
// counterSven = 0;
//
//
// //create Array for questionSven
// var arSven = new Array('seatac','kent');
// //create while loop
// while(counterSven < 6){
//   counterSven++;
//   var userQuestion = prompt("Guess cities that I have lived in WA state");
//
//   if (arSven.indexOf(userQuestion) !== -1){
//     //console.log(arSven === userQuestion);
//     alert("correct");
//
//     break;
//   }
//   else if (arSven.indexOf(userQuestion) === -1) {
//   alert("not correct");
//   }
//   else if (counterSven === 6) {
//     alert("too many guess'\s");
//   }
// }
//  alert("seatac, kent I have lived");
// }
// question7()
