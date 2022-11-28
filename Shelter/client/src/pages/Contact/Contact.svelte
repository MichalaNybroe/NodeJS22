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

<h3>Please Contact us with your questions</h3>
<div>
    <form id="contactForm">
        <label for="email">Email</label>
        <input type="email" placeholder="email@email.dk" name="email" id="email">
        <label for="message">Message</label>
        <textarea rows="15" cols="60" name="message" id="message"></textarea>
        <input type="submit" value="Submit" id="Submit">
    </form>
</div>

<style>
    * {
        color: #29353D;
        text-align: center;
    }

    h3 {
        font-size: 2rem;
        text-align: center;
    }

    div {
        text-align: center;
        margin: 3rem 40rem;
    }

    textarea {
        resize: none;
    }

    #contactForm {
        background-color: #004f83;
    }

    label {
        padding: 1rem 0 0.5rem 0;
        color: white;
    }

    #email {
        grid-row: 2;
        width: 40%;
        border-radius: 4px;
    }

    #message {
        grid-row: 4;
        border-radius: 4px;
    }

    #Submit {
        width: 20%;
    }


</style>
