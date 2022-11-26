<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js"
    import { user } from "../../store/auth.js"
    import { useNavigate } from "svelte-navigator";

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
                        // vis notifikation som siger dyr oprettet
                    } else {
                        // notifikation oprettelse fejlet
                        response.json().then((m) => alert(m.message))
                    }
            }).catch((message) => /*notifikation om fejl netværk*/{})
        })

    })
</script>

<form id="animalForm">
    <h3>Submit your animal</h3>
    <label for="animalType">Animal type</label>
    <input type="text" placeholder="fx Cat" name="animalType" id="animalType">
    <label for="animalSex">Race</label>
    <input type="text" placeholder="Labrador" name="animalRace" id="animalRace">
    <label for="animalRace">Name</label>
    <input type="text" placeholder="Berte" name="animalName" id="animalName">
    <label for="animalAge">Age</label>
    <input type="text" placeholder="13 years" name="animalAge" id="animalAge">
    <label for="animalSex">Sex</label>
    <input type="text" placeholder="Male" name="animalSex" id="animalSex">
    <label for="animalColor">Color</label>
    <input type="text" placeholder="Red and Brown" name="animalColor" id="animalColor">
    <label for="animalPrice">Price</label>
    <input type="number" placeholder="1000" name="animalPrice" id="animalPrice">
    <label for="animalDescription">Description</label>
    <textarea name="animalDescription" rows="10" cols="100"  placeholder="This is Balou, he is..." id="animalDescription"></textarea>
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