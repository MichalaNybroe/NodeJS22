<script>
    import { Router, Link, Route } from "svelte-navigator"

    const emailInp = document.getElementById("signEmailInp")
    const passwordInp = document.getElementById("signPassInp")
    const passwordInpTwo = document.getElementById("signPassInpTwo")
    const signForm = document.getElementById("signForm")

    signForm.addEventListener("submit", (event) => {
        event.preventDefault()
    
        const body = {
            email: emailInp.value,
            password: passwordInp.value,
            passwordTwo: passwordInpTwo.value
        }

        return fetch("/signUp", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }).then((response) => {
            //let notification say they can log in now
            // notification with error
        }).catch
        // notification with error
})
</script>

<Router>
    <div id="signBox">
        <form id="signForm" action="/singUp" method="POST">
            <h2>Sign up</h2>
                <input type="email" id="signEmailInp" placeholder="node@mail.dk" class="input">
                <input type="password" id="signPassInp" placeholder="Enter password" class="input">
                <input type="password" id="signPassInpTwo" placeholder="Reenter password" class="input">
                <input type="submit" id="signSubmit">
        </form>
    </div>
    <Link to="/login">Return to Login</Link>
</Router>

<style>
#signBox {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    text-align: center;
}

#signForm {
    background-color: rgba(43,134,187,0.5);
    padding: 1rem;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 25% 50% 25%;
}

#signForm h2 {
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

#signEmailInp {
    margin-bottom: 2rem;
}

#signPassInp {
    margin-bottom: 2rem;
}

#signPassInpTwo {
    margin-bottom: 2rem;
}

#signSubmit {
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

#signSubmit:hover {
    background-color: white;
}
</style>
