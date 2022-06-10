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

const titleCased = () => {

  return tutorials.map((line) => {
    const firstLetter = line.split(" ")
    const capitalizeFirstLetter = firstLetter.map(
      (firstLetter) => firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1)
    )
    const weGet = capitalizeFirstLetter.join(" ")
    return weGet;
  })
  
 }
