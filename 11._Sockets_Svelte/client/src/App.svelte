<script>
    import { onMount } from "svelte"
    import { BASE_URL } from "./stores/globalStore.js"
    import Colors from "../src/pages/colors/Colors.svelte"
    import Register from "../src/pages/register/Register.svelte"
    let loggedInUser

    onMount( async () => {
        const response = await fetch($BASE_URL + "/fetchMyUser", {credentials: "include"})
        const { data } = await response.json()
        loggedInUser = data
    })
</script>

{#if loggedInUser}
    <Colors />
{:else}
    <Register />
{/if}