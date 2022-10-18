const emailInp = document.getElementById('email');
const passwordInp = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const body =  {
        email: emailInp.value,
        password: passwordInp.value
    };

       return fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then( (response) => {
        if(response.ok) {
            window.location.replace('/admin')
        } else {
            response.json().then((m) => alert(m.message));
        }
        }).catch(message => alert(JSON.stringify(message)));
});

