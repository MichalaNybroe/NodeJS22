// call back funktion er ikke en funktion som
// kaldes tilbage MEN
// er en hver referance til kode som sendes som argument
// information sendt videre til anden funktion som argument

function genericActionExecutor(anyCallBackFunction, name) {
    return anyCallBackFunction(name);
}

//const funtionReferance = add;
//const total = add();

//console.log(funtionReferance, total);



const spitting = (name) => `${name} is spitting`;

console.log(genericActionExecutor(spitting, 'Amanda'));
//spitting kaldes ikke med det samme med refereres
// flow kører generic metode først så spitting


