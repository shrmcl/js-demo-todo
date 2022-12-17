// RE-DOING THE CODE FROM MEMORY
// listen for add button to be clicked
    // + prevent default
// capture the value of the input once clicked
// create a new li element
// assign the new li element with the text content of the input value
// append new li element to ul
// clear the input


const form = document.getElementById('todoForm');

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    
    const input = document.querySelector('#newTodo');
    const newTodo = document.createElement('li');
    newTodo.innerHTML = input.value;

    const list = document.querySelector('#list');
    list.append(newTodo);

    console.log(input.value);
    input.value = '';
})





























// CLASS DEMO CODE:

// console.log('testing linkage')
// // select the form
// const form = document.querySelector('#todo-form')

// // listen for submit
// form.addEventListener('submit', (evt) => {
//     // prevent page refresh on submit
//     evt.preventDefault();

//     // on submit, select the input text
//     const input = document.querySelector('#todo-input')

//     // test the input
//     alert(input.value)
//     const list = document.querySelector('#todo-list')

//     // create a new list itme with that text
//     const newLi = document.createElement('li')
//     newLi.innerText = input.value

//     // add that list item to the list
//     list.append(newLi)

//     // clear text input
//     input.value = ''
// })