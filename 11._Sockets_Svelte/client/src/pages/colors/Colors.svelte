<script>
    import io from "socket.io-client"

    let colorValue = "#0000"

    const socket = io("http://127.0.0.1:8080")

    socket.on("Update the color", (data) => {
        console.log(data.data)
        document.body.style.backgroundColor = data.data
    })

    function sendColor() {
        socket.emit("Client chose a new color", {data: colorValue})
    }

</script>


<input bind:value={colorValue} type="color" id="colorInp">
<button on:click={sendColor}>Send Color</button>