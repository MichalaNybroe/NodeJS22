<script>
    export let child;
    export let onTellILoveYou;
    export let onAlwaysSayHi;
    export let parentName;
</script>

<p>{child.name}</p>
<button on:click={onTellILoveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>
<button on:click={onAlwaysSayHi}>Say Hi!</button>