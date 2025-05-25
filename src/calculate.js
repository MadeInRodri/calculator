let number = ""
let screenNumber = document.querySelector('.screen-number')
let firstNumber = 0
let secondNumber = 0
let actualOperation = ""
let isOperate = false

export function buttonClick(e){
    const button = e.target.closest('button')
    if(!button) return

    if(button.classList.contains('char')){
        addChar(button)
    }

    if(button.classList.contains('operate')){
        clickOperation(button)
    }

    if(button.classList.contains('total-button')){
        total()
    }

    if(button.classList.contains('del-button')){
        del()
    }

    if(button.classList.contains('reset-button')){
        reset()
    }
}

function addChar(e){
    number += e.innerText
    screenNumber.innerText = number

}

function clickOperation(e){
    if(!isOperate){
        firstNumber = parseFloat(number)
        isOperate = true
        actualOperation = e.innerText
        number = ""
        screenNumber.innerText = number
    }
    else{
        operate()
        actualOperation = e.innerText
    }

}

function operate(){
    secondNumber = parseFloat(number)
    number = ""
    switch(actualOperation){
        case '+':
            firstNumber = firstNumber + secondNumber
            break
        case '-':
            firstNumber = firstNumber - secondNumber
            break
        case 'x':
            firstNumber = firstNumber * secondNumber
            break
        case '/':
            firstNumber = firstNumber / secondNumber
            break
        default:
            break
    }
    secondNumber = 0
    screenNumber.innerText = firstNumber
}

function total(){
    if(number == ""){
        screenNumber.innerHTML = "Sintax Error"
    }
    else{
        operate()
    }
    actualOperation = ""
    number = firstNumber
    isOperate = false
}

function del(){
    number = number.slice(0,-1)
    screenNumber.innerText = number
}

function reset(){
    number = ""
    screenNumber.innerText = number
    actualOperation = ""
    firstNumber = 0
    secondNumber = 0
    isOperate = false
}