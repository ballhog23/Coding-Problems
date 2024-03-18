// using live server to test code

// Given is a string className.
// Create a p element which has className as class and className as content.
// In the output, the first letter should be displayed in capital letters.
// Append the created element to the body tag.

function welcomeToMyClass(className) {
    const element = document.createElement('p');
    const firstLetter = className[0].toUpperCase();
    const restOfContent = className.slice(1)

    element.classList.add(className);
    element.innerHTML = firstLetter + restOfContent;

    document.body.appendChild(element);
}

welcomeToMyClass('container')