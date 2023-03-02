//create and populate a map at the same time
const questionMap = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['answer', 3],
  [true, 'Answer is correct'],
  [false, 'Try Again'],
]);

console.log(questionMap);

console.log(questionMap.get('question'));
for (const [key, value] of questionMap) {
  if (typeof key === 'number') {
    console.log(`${key}. ${value}`);
  }
}
//const answer = prompt('Your answer')
