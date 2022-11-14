<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js";


    let animals = [];

    async function fetchAnimals() {
    const response = await fetch(`${$BASE_URL}` + "/api/animals");
        const data = await response.json();
        animals = data.data;
    }

    
    onMount(fetchAnimals);
</script>

<h3>Todo... animals .. show</h3>

{#each animals as animal}
    <p>{animal}</p>
{/each}
