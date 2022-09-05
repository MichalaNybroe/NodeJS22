// Never do
malte = "malte";
var malte = "Malte";


// Nyt scope {} (block scope)
{
 let someValue = true;
  {
    let someValue = false;
  }

  console.log(someValue);
}

// Hvis ovenstående er var og ikke let vil det
// kunne tilgås globalt og ændres

// Variable deklaration
// Const er ikke konstant men når den oprettes
// skal den deklareres med det samme.
// man kan ændre på værdi men ikke reassigne
const me = {
    name:"Anders"
};
// Const er mutable men ikke reassignable


// Mærkelig adfærd ved brug af var - vil udskrive 5 5 gange
for(var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// set timeout er ikke en sleep funktion men 
// en eksekver i fremtid

console.log(add(5, 28));
// gets hoisted
function add(a, b) {
    return a + b;
}


// Når en funktion ikke har et navn er den anonym
const addAnonymousFunction = function(a, b) {
    return a + b;
};

console.log(addAnonymousFunction(3,6))

const addArrowFunction = (a, b) => {
    return a + b;
};

const addArrowFunctionCompact = (a,b) => a + b;

