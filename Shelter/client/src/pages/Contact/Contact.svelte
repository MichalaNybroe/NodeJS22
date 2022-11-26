<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js"
    import * as Toastr from "toastr"
    import '../../../node_modules/toastr/build/toastr.css'

    onMount(() => {
        const email = document.getElementById("email")
        const message = document.getElementById("message")
        const contactForm = document.getElementById("contactForm")

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault()

            const body = {
                email: email.value,
                message: message.value
            }

            return fetch(`${$BASE_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then((response) => {
                    if (response.ok) {
                        Toastr.success("Message is received. Thank you for sending it!")
                    } else {
                        response.json().then((m) => Toastr.error(m.message))
                    }
                })
                .catch((message) => Toastr.error("Network error. Try again later."))
        })
    })
</script>

<form id="contactForm">
    <h3>Please Contact us with your questions</h3>
    <label for="email">Email</label>
    <input type="email" placeholder="email@email.dk" name="email" id="email">
    <label for="message">Message</label>
    <textarea rows="4" cols="50" name="message" id="message"></textarea>
    <input type="submit" value="Submit">
</form>


<style>
    * {
        color: #29353D;
    }

    h3 {
        font-size: 2rem;
        text-align: center;
    }
</style>
