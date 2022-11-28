<script>
    import { onMount } from "svelte"
    import { Router, Link } from "svelte-navigator"
    import { BASE_URL } from "../../store/globals.js"
    import * as Toastr from "toastr"
    import '../../../node_modules/toastr/build/toastr.css'

    onMount(() => {
        const emailInp = document.getElementById("forgotEmailInp")
        const forgotForm = document.getElementById("forgotForm")

        forgotForm.addEventListener("submit", (event) => {
            event.preventDefault()

            return fetch(`${$BASE_URL}/forgotPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInp.value }),
            }).then((response) => {
                if (response.ok) {
                    Toastr.success("An email has been sent for your confirmation.")
                } else {
                    response.json().then((m) => Toastr.warning(m.message))
                }
            }).catch(
                () => {
                Toastr.error("Unsuccessfull. Try again later.")
            })
        })
    })
</script>

<Router primary={false}>
    <div id="forgotBox">
        <form id="forgotForm">
            <h2>
                Enter email and we will send you a mail with your new password.
            </h2>
            <p>Remember to change your password after.</p>
            <input
                type="email"
                id="forgotEmailInp"
                placeholder="shelter@mail.dk"
                class="input"
            />
            <input type="submit" id="forgotSubmit" value="Reset" />
        </form>
    </div>
    <Link to="/login" class="link">Return to Login</Link>
</Router>

<style>
    #forgotBox {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        text-align: center;
        margin: 2rem 15rem;
    }

    #forgotForm {
        background-color: #004f83;
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

    #forgotForm p {
        grid-row: 2;
        color: white;
        grid-column: 2/3;
    }

    .input {
        padding: 0.5rem;
        grid-column: 2/3;
    }

    #forgotEmailInp {
        margin-bottom: 2rem;
        grid-row: 3;
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
