<script>
    export let name;
    export let children;
    export let pets;

    import Child from "./Child.svelte";
    import Pet from "./Pet.svelte";

    function handleTellILoveYou(message) { //konvention i react at sige handle
        console.log(message);
    };

    function handleAlwaysSayHi(message) {
        console.log(message);
    }

</script>

<h1>Hi, I'm {name}.</h1>


<!--sådan man looper igennem børnene: -->
{#each children as child}
    <!--<p>{child.name}</p>-->
    <!-- <p>{JSON.stringify(child)}</p> -->
    <Child child={child} onTellILoveYou={handleTellILoveYou} parentName={name} onAlwaysSayHi={handleAlwaysSayHi}/> <!--konvention at sige on i referance til handler-->
{/each}

{#each pets as pet}
    <Pet pet={pet}/>
{/each}
