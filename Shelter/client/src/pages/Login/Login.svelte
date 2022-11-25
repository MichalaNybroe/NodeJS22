<script>
    import { onMount } from "svelte";
    import { Router, Link, Route } from "svelte-navigator";

    import ForgotPassword from "../ForgotPasssword/ForgotPassword.svelte";
    import SignUp from "../SignUp/SignUp.svelte";

    onMount(async () => {
        const emailInp = document.getElementById("email");
        const passwordInp = document.getElementById("password");
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const body = {
                email: emailInp.value,
                password: passwordInp.value,
            };

            return fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
                .then((response) => {
                    if (response.ok) {
                        window.location.replace("/settings");
                    } else {
                        //lad det være en notifikation
                        response.json().then((m) => alert(m.message));
                    }
                })
                .catch((message) => alert(JSON.stringify(message)));
        });
    });
</script>

<Router>
    <div id="loginBox">
        <form action="/login" method="POST" id="loginForm">
            <h4>Sign In!</h4>
            <br />
            <label for="email">Email:</label>
            <input
                type="email"
                class="input"
                name="email"
                placeholder="great@mail.dk"
                id="email"
            /><br />
            <label for="password">Password:</label>
            <input
                type="password"
                class="input"
                name="password"
                placeholder="Enter password"
                id="password"
            />
            <Link id="forgotPW" to="/forgotPassword">Forgot your password?</Link
            ><br />
            <input type="submit" id="logButton" value="Login" />
            <Link id="signUp" to="/signUp">Sign Up</Link>
        </form>
    </div>

    <Route path="/forgotPassword"><ForgotPassword /></Route>
    <Route path="/signUp"><SignUp /></Route>
</Router>

<style>
    #loginBox {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        text-align: center;
        margin: 2rem;
    }

    #loginForm {
        background-color: #004f83;
        padding: 1rem;
        grid-column: 2/3;
        display: grid;
        grid-template-columns: 25% 50% 25%;
        grid-gap: 1rem;
    }

    #loginForm h4 {
        color: white;
        padding: 1rem 0;
        font-size: 1.5rem;
        grid-column: 2/3;
        grid-row: 1;
    }

    #loginForm label {
        font-weight: bold;
        color: white;
        font-size: 1.2rem;
        grid-column: 2/3;
    }

    .input {
        padding: 0.5rem;
        grid-column: 2/3;
    }

    #logButton {
        cursor: pointer;
        text-align: center;
        width: 4rem;
        padding: 0.3rem;
        border-radius: 1rem;
        border: none;
        font-size: 1rem;
        margin: 0 145px;
        grid-row: 7;
        grid-column: 2/3;
    }

    #logButton:hover {
        background-color: white;
    }

    #forgotPW {
        border: none;
        background-color: transparent;
        font-size: 1rem;
        color: white;
        grid-row: 6;
        text-align: center;
        grid-column: 2/3;
    }

    #forgotPW:hover {
        cursor: pointer;
        font-weight: bold;
    }
</style>
