// looping through all elements in the unordered list with an id of #myList 
// const listItems = document.querySelectorAll('#myList li');

// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i].textContent);
// }


// loop through all div elements using a for of loop that have a class of box
// and add a background color of light-gray to each one

// const boxes = document.querySelectorAll('.box');

// for (const box of boxes) {
//   box.style.backgroundColor = 'lightgray';
// }

// loop through all buttons with  a class of btn using the for each method
// next add an event listner to each button in the loop when clicked it logs out the
// text content and the words clicked! afterwards.
// const buttons  = document.querySelectorAll('.btn')

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log(btn.textContent + ' clicked!')
//     })
// });




// Access the button element with an id of changeBtn and add an event listener to it. 
// When the button is clicked change the textcontent in the p tag with the id of message to 
// "text has been changed"



// const changeBtn = document.getElementById('changeBtn');
// const message = document.getElementById('message');

// changeBtn.addEventListener('click', () => {
//   message.textContent = 'The text has been changed!';
// });


// const inputField = document.querySelector('#inputField');

// inputField.addEventListener('keydown', event => {
//   console.log(`Key pressed: ${event.key}`);
// })