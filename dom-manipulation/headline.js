// The string greeting is given. Output this string in a HTML p tag and color the font gree
// if greeting contains the word 'Hi' and blue if greeting contains the word 'Hello'.
// If both occur, the word turns red. Print the content into the body tag.

function headline2(greeting) {
  document.body.insertAdjacentHTML('afterbegin', `<p>${greeting}</p>`);
  const element = document.querySelector('p');
  
  switch (true) {
    case greeting.includes('Hello') && greeting.includes('Hi'): 
      element.style.color = 'red';
      break;
    case greeting.includes('Hi'): element.style.color = 'green';
      break;
    case greeting.includes('Hello'): element.style.color = 'blue';
      break;
  }
}

headline2('LoL');
headline2('Hello, Hi!');
headline2('Hello there!');
headline2('Hi there!');