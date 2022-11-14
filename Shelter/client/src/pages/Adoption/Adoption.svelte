<script>
    import { Router, Link, Route } from "svelte-navigator"
    import { onMount } from "svelte"
    import { BASE_URL } from "../../store/globals.js"


    let animals = []

    async function fetchAnimals() {
    const response = await fetch(`${$BASE_URL}` + "/api/animals")
        const data = await response.json()
        animals = data.data
    }

    
    onMount(fetchAnimals)
</script>

<h3>Animals for adoption</h3>
<!--Find format for animals and make routes for display of animal categories-->
{#each animals as animal}
    <p>{animal}</p>
{/each}
