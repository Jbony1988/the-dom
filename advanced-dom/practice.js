// Event listeners are functions in JavaScript that wait for a specific event to occur 
// on a DOM element, and then execute a block of code in response to that event. 
// They allow you to create interactive web pages by responding to user actions.
// Event types: There are many different types of events that you can listen for, 
// such as click, keydown, submit, input, mouseover, scroll, etc. 
// The event type determines what kind of user interaction will trigger the listener.

// Callback functions: When the event occurs, the callback function you provided 
// is executed. This function can access an event object that contains information 
// about the event, such as the target element, coordinates, key pressed, etc.




// Exercise 4: Event Listeners
// 1. Select the name input field using its ID
// 2. Select the submit button using its ID
// 3. Select the output message paragraph using its ID
// 4. Add a click event listener to the submit button
// 5. Inside the event listener, get the value of the name input
// 6. Update the text content of the output message paragraph with the name




// The choice of loop depends on your specific use case and personal preference. 
// Here are some general guidelines:
// Use the for loop when you need to access the index of the elements.
// Use the for...of loop when you just need to iterate over the elements and don't require the index.
// Use the forEach() method when you have a functional programming style and want a more concise syntax.
// Avoid the for...in loop when working with a NodeList, as it can lead to unexpected behavior.


// for loop
const forLoopItems = document.querySelectorAll( '.for-loop-item')
 
for (let i = 0; i < forLoopItems.length; i++) {
        if(i === 2) {
            forLoopItems[i].style.backgroundColor = 'red'
        }

    
}



for (const item of forLoopItems) {
    console.log('for of loop', item)
    item.style.fontSize = '25px'
    
}


forLoopItems.forEach(item => {
    item.style.border = '1px solid green'
});






















// const forLoopItems = document.querySelectorAll('.for-loop-container .for-loop-item');
// for (let i = 0; i < forLoopItems.length; i++) {
//   console.log(`for loop: ${forLoopItems[i].textContent}`);
// }

// // for...of loop
// const forOfLoopItems = document.querySelectorAll('.for-of-loop-container .for-of-loop-item');
// for (const item of forOfLoopItems) {
//   console.log(`for...of loop: ${item.textContent}`);
// }

// // forEach() method
// const foreachLoopItems = document.querySelectorAll('.foreach-loop-container .foreach-loop-item');
// foreachLoopItems.forEach(item => {
//   console.log(`forEach() method: ${item.textContent}`);
// });
