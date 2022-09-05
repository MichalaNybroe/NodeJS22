// call back funktion er ikke en funktion som
// kaldes tilbage MEN
// er en hver referance til kode som sendes som argument
// information sendt videre til anden funktion som argument

function genericActionExecutor(anyCallBackFunction, name) {
    anyCallBackFunction(name);
}

const funtionReferance = add;
const total = add();

console.log(funtionReferance, total);