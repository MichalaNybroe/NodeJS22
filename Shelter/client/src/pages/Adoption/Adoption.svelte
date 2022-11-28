<script>
    import { onMount } from "svelte"
    import { BASE_URL } from "../../store/globals.js"

    // Make it possible to select animal to view more on each "/api/animals/:id"
    let animals = []

    async function fetchAnimals() {
    const response = await fetch(`${$BASE_URL}` + "/api/animals", {credentials: "include"}) //to use voth session and cors
        const data = await response.json()
        animals = data.data
        console.log(data.data)
    }
    
    onMount(fetchAnimals)
</script>

<h3>Animals for adoption</h3>
<!--Find format for animals and make routes for display of animal categories-->
<div id="animals">
    {#each animals as animal}
        <div class="animal">
            <p>Animal type: {animal.type}</p>
            <p>Name: {animal.name}</p>
        </div>
    {/each}
</div>

<style>
    * {
        color: #29353D;
    }

    h3 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    #animals {
        text-align: center;
        margin: 0 20rem;
        justify-items: center;
        margin-bottom: 8rem;
    }

    .animal {
        border-color: #939a9f;
        border: solid;
    }
</style>
