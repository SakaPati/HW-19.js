// 1
const colors = document.querySelectorAll("input")
colors.forEach((element) => {
    element.addEventListener("change", handleClickInput);
})

function handleClickInput(event) {
document.body.style.backgroundColor = event.target.value
}

// 2
const refs = {
    helloName: document.querySelector("#name-input"),
    printHello: document.querySelector("#name-output"),
}

refs.helloName.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.printHello.textContent = event.currentTarget.value
    if(event.currentTarget.value.length < 2){
        refs.printHello.textContent = "незнайомець"
    }
}
// 2.1
const validInput = document.querySelector("#validation-input")
const limitInput = parseInt(validInput.dataset.length);
validInput.addEventListener("blur", toggleVlidatorInput)

function toggleVlidatorInput(event) {
    const targetValues = event.currentTarget.value
    if(targetValues.length < limitInput){
        validInput.classList.remove('valid')
        validInput.classList.add('invalid')
    } else {
        validInput.classList.remove('invalid')
        validInput.classList.add('valid')
    }
}

// 3
const rangeInput = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")

rangeInput.addEventListener('input', controlSize)

function controlSize(event) {
    const inputSize = event.currentTarget.value + "px"
    spanText.style.fontSize = inputSize
    
}