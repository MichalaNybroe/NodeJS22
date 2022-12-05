<script>
    import{ BASE_URL } from "../../stores/globalStore.js"
    let username  = ""

    async function submitRegistration() {
        await fetch($BASE_URL 0 "/registerMyUser", {
            method: "POST",
            credentials: "include",
            header: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username })
        }) 
    }

</script>

<input bind:value={username} placeholder="Write username">
<button on:click={}>Register</button>
