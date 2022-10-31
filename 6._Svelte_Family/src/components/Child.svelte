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
        fridgeMessage = "";
    };

</script>

<div class:bright-kid={child.brightKid} class={child.blackSheep || "not-a-blacksheep"}><!--Conditional rendering-->
    <p>{child.name}</p>
    <input placeholder="Write a message" bind:value={fridgeMessage}><!--Bind value to element-->
    <button on:click={handleWriteMessage}>Write message</button>
    <br>

    <button on:click={onTellILoveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>
    <button on:click={onAlwaysSayHi}>Say Hi!</button>
</div>

<style>
    .bright-kid {
        border: solid 2px yellow;
    }

    .ultra-blacksheep {
        background-color: black;
    }

    .medium-blacksheep {
        background-color: grey;
    }

    .not-a-blacksheep {
        background-color: aquamarine;
    }
</style>