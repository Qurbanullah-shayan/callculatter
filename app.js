const inputtextE = document.querySelector('#text1');
const valE = document.querySelectorAll('#vals');
const clearE = document.querySelector('#clear');
const equalE = document.querySelector("#eval");

valE.forEach(vals=>{
    vals.addEventListener('click', () => {
        inputtextE.value += vals.value
    })
})

clearE.addEventListener('click', ()=>{
   inputtextE.value = inputtextE.value.slice(0, -1)
})
equalE.addEventListener('click', ()=>{
    inputtextE.value = eval(inputtextE.value)
})