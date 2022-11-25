<script>
    import { Router, Link, Route } from "svelte-navigator"
    const emailInp = document.getElementById("forgotEmailInp")
    const forgotForm = document.getElementById("forgotForm")


    forgotForm.addEventListener("submit", (event) => {
        event.preventDefault()

        return fetch("/forgotPassword", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: emailInp.value})
        }).then( (response) => {
            if(response.ok) {
                //give notification about email being sent
            } else {
                response.json().then(/*(m) => error notification(m.message)*/)
            }
        }).catch(message => /*notifcation error JSON.stringify(message)*/message)
    })
</script>

<Router>
    <div id="forgotBox">
        <form id="forgotForm" action="/forgotPassword" method="POST">
            <h2>Enter email and we will send you a mail with your new password.</h2>
            <p>Remember to change your password after.</p>
            <input type="email" id="forgotEmailInp" placeholder="shelter@mail.dk" class="input">
            <input type="submit" id="forgotSubmit" value="">
        </form>
    </div>
    <Link to="/login">Return to Login</Link>
    
</Router>

<style>
    #forgotBox {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    text-align: center;
}

#forgotForm {
    background-color: rgba(43,134,187,0.5);
    padding: 1rem;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 25% 50% 25%;
}

#forgotForm h2 {
    color: white;
    padding: 2rem 0;
    font-size: 1.5rem;
    grid-column: 2/3;
    grid-row: 1;
}

.input {
    padding: 0.5rem;
    grid-column: 2/3;
}

#forgotEmailInp {
    margin-bottom: 2rem;
}

#forgotSubmit {
    cursor: pointer;
    text-align: center;
    width: 4rem;
    padding: 0.3rem;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    margin: 0 145px;
    grid-row: 5;
    grid-column: 2/3;
}

#forgotSubmit:hover {
    background-color: white;
}
</style>