const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = array => {
  array = tutorials.map(element => 
    element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  )
  return array;
}

// const titleCased = (array) => {
//   let words = array.split(" ");
//   const newArray = words.map(str => str[0].toUpperCase()).join(' ');
//   return newArray
// }  

// function titleChange(string){
//   let words = string.split(" ")
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// const newArray = words.join(" ")
// return newArray;
  
// }
// function titleCased(){
//  const newTutorials = tutorials.map(titleChange);
// return newTutorials;
// }

console.log(titleCased())