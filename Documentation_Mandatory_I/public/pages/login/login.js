const emailInp = document.getElementById('email');
const passwordInp = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const body =  {
        email: emailInp.value,
        password: passwordInp.value
    };

    console.log(body);

    return fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    }).then(response => response.json()).catch(message => alert(JSON.stringify(message)));
});

