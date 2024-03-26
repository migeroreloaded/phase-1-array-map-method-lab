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

// Helper function to capitalize the first letter of each word
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const titleCased = () => {
  return tutorials.map(tutorial => {
    // Split the string into words, capitalize each word, and join them back
    return tutorial.split(' ').map(word => capitalize(word)).join(' ');
  });
};

// Test the function
console.log(titleCased());
