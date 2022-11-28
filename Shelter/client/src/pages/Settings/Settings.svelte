<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js"
    import { user } from "../../store/auth.js"
    import { useNavigate } from "svelte-navigator";
    import * as Toastr from "toastr"
    import '../../../node_modules/toastr/build/toastr.css'

    if($user === null) {
        const navigate = useNavigate()

        navigate("/")
    }

    onMount(() => {
        const type = document.getElementById("animalType")
        const race = document.getElementById("animalRace")
        const name = document.getElementById("animalName")
        const age = document.getElementById("animalAge")
        const sex = document.getElementById("animalSex")
        const color = document.getElementById("animalColor")
        const price = document.getElementById("animalPrice")
        const description = document.getElementById("animalDescription")
        const form = document.getElementById("animalForm")

        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const body = {
                type: type.value,
                race: race.value,
                name: name.value,
                age: age.value,
                sex: sex.value,
                color: color.value,
                price: price.value,
                description: description.value
            }

            return fetch(`${$BASE_URL}/api/animals`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }).then((response) => {
                if (response.ok) {
                    Toastr.success("Animal is successfully added.")
                    } else {
                        Toastr.warning("Animal creation unsucessfull.")
                    }
            }).catch((message) => {
                Toastr.error("Unable to create. Try again later.")
            })
        })

    })
</script>

<div>
    <form id="animalForm">
        <h3>Submit your animal</h3>
        <label for="animalType">Animal type</label>
        <input type="text" placeholder="fx Cat" name="animalType" id="animalType">
        <br>
        <label for="animalSex">Race</label>
        <input type="text" placeholder="Labrador" name="animalRace" id="animalRace">
        <br>
        <label for="animalRace">Name</label>
        <input type="text" placeholder="Berte" name="animalName" id="animalName">
        <br>
        <label for="animalAge">Age</label>
        <input type="text" placeholder="13 years" name="animalAge" id="animalAge">
        <br>
        <label for="animalSex">Sex</label>
        <input type="text" placeholder="Male" name="animalSex" id="animalSex">
        <br>
        <label for="animalColor">Color</label>
        <input type="text" placeholder="Red and Brown" name="animalColor" id="animalColor">
        <br>
        <label for="animalPrice">Price</label>
        <input type="number" placeholder="1000" name="animalPrice" id="animalPrice">
        <br>
        <label for="animalDescription">Description</label><br>
        <textarea name="animalDescription" rows="10" cols="100"  placeholder="This is Balou, he is..." id="animalDescription"></textarea>
        <br>
        <input type="submit" value="Submit">
    </form>
</div>

<style>
    * {
        color: #29353D;
    }
    
    h3 {
        font-size: 2rem;
        text-align: center;
    }

    div {
        margin: 2rem 30rem;
    }

    textarea {
        resize: none;
    }

    input {
        margin-bottom: 1rem;
    }
</style>