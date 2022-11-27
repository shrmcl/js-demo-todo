console.log('testing linkage')
// select the form
const form = document.querySelector('#todo-form')

// listen for submit
form.addEventListener('submit', (evt) => {
    // prevent page refresh on submit
    evt.preventDefault();

    // on submit, select the input text
    const input = document.querySelector('#todo-input')

    // test the input
    alert(input.value)
    const list = document.querySelector('#todo-list')

    // create a new list itme with that text
    const newLi = document.createElement('li')
    newLi.innerText = input.value

    // add that list item to the list
    list.append(newLi)

    // clear text input
    input.value = ''
})