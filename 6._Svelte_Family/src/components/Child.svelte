<script>
    export let child;
    export let onTellILoveYou;
    export let onAlwaysSayHi;
    export let parentName;

    import { fridgeMessageStore } from "../store/fridgeBulletinStore";
    let fridgeMessage = "";

    function handleWriteMessage() {
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + `${fridgeMessage}`;
        });
    };

</script>

<p>{child.name}</p>
<input placeholder="Write a message" bind:value={fridgeMessage}><!--Bind value to element-->
<button on:click={handleWriteMessage}>Write message</button>
<br>

<button on:click={onTellILoveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>
<button on:click={onAlwaysSayHi}>Say Hi!</button>