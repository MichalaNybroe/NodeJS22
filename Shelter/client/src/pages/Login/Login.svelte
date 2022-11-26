<script>
    import { onMount } from "svelte"
    import { Router, Link, useNavigate } from "svelte-navigator"
    import { BASE_URL } from "../../store/globals.js"
    import { user } from "../../store/auth.js"
    import * as Toastr from "toastr"
    import '../../../node_modules/toastr/build/toastr.css'

    const navigate = useNavigate()
    onMount(async () => {
        const emailInp = document.getElementById("email")
        const passwordInp = document.getElementById("password")
        const loginForm = document.getElementById("loginForm")
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault()

            const body = {
                email: emailInp.value,
                password: passwordInp.value,
            }

            return fetch(`${$BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then((response) => {
                    if (response.ok) {
                        user.set(true)
                        navigate("/settings")
                    } else {
                        response.json().then((m) => Toastr.warning(m.message))
                    }
            }).catch(() => {

                Toastr.error("Not possible to login. Try again later.")
            })

        })
    })
</script>

<Router primary={false}>
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
            <br />
            <input type="submit" id="logButton" value="Login" />
            <Link to="/forgotPassword"><p  id="forgotPW">Forgot your password?</p></Link>
            <Link to="/signUp"><p id="signUp">Sign Up</p></Link>
        </form>
    </div>
</Router>

<style>
    #loginBox {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        text-align: center;
        margin: 2rem 15rem;
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
        text-align: center;
    }

    #logButton {
        cursor: pointer;
        text-align: center;
        width: 6rem;
        padding: 0.3rem;
        border-radius: 1rem;
        border: none;
        font-size: 1rem;
        margin: 0 145px;
        grid-row: 6;
        grid-column: 2/3;
        justify-self: center;
    }

    #logButton:hover {
        background-color: white;
    }

    #forgotPW {
        color: white;
        grid-column: 2/3;
        grid-row: 7;
    }

    #forgotPW:hover {
        font-weight: bold;
    }

    #signUp {
        color: white;
        text-decoration: underline;
        grid-row: 8;
    }

    #signUp:hover {
        font-weight: bold;
    }
</style>
