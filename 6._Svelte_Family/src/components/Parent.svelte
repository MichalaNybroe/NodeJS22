<script>
    export let name;
    export let children;
    export let pets;

    import Child from "./Child.svelte";
    import Pet from "./Pet.svelte";
    import { fridgeMessageStore } from "../store/fridgeBulletinStore.js"

    function handleTellILoveYou(message) { //konvention i react at sige handle
        console.log(message);
    };

    function handleAlwaysSayHi(message) {
        console.log(message);
    };

    function handleEraseFridgeBulletin() {
        fridgeMessageStore.set("Write your message...");
    };

</script>

<h1>Hi, I'm {name}.</h1>
<p on:click={handleEraseFridgeBulletin} on:keydown={() => {}}>Erase message on fridge</p><!--on keydown else it wont work, because it is p tag-->

<!--sådan man looper igennem børnene: -->
{#each children as child}
    <!--<p>{child.name}</p>-->
    <!-- <p>{JSON.stringify(child)}</p> -->
    <Child child={child} onTellILoveYou={handleTellILoveYou} parentName={name} onAlwaysSayHi={handleAlwaysSayHi}/> <!--konvention at sige on i referance til handler-->
{/each}

{#each pets as pet}
    <Pet pet={pet}/>
{/each}


