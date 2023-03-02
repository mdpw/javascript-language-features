//create and populate a map at the same time
const questionMap = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correctAnswer', 3],
  [true, 'Answer is correct'],
  [false, 'Try Again'],
]);

console.log(questionMap);

console.log(questionMap.get('question'));

//questionMap is an array of arrays. so each element we can do array destructuring
for (const [key, value] of questionMap) {
  //get only arrays with keys are numeric
  if (typeof key === 'number') {
    console.log(`${key}. ${value}`);
  }
}
//get user answers and convert to number
const answer = Number(prompt('Your answer'));

console.log(`Your Answer:${answer}`);

//if user answer is eaqual to correctAnswer then returns true, then value of the key for matching 'true' boolean value will be taken from the Map
console.log(questionMap.get(answer === questionMap.get('correctAnswer')));
