// RE-DOING THE CODE FROM MEMORY
console.log('testing linkage')

// select form and listen for submit (and prevent defualt)
const form = document.querySelector('#todo-form');
form.addEventListener('submit', (evt) => {

    evt.preventDefault()

    // select the input text
    const input = document.querySelector('#todo-input')

    // create new list item element and assign its value to the input text
    const newLi = document.createElement('li')
    newLi.innerHTML = input.value
    console.log(newLi.innerHTML, input.value)

    // add the new list item to the list
    const list = document.querySelector('#todo-list')
    list.append(newLi)

    // clear the input value
    input.value = ''
    
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