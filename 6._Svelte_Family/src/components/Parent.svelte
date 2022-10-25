<script>
    export let name;
    export let children;
    export let pets;

    import Child from "./Child.svelte";
    import Pet from "./Pet.svelte";
</script>

<h1>Hi, I'm {name}.</h1>


<!--sådan man looper igennem børnene: -->
{#each children as child}
    <!--<p>{child.name}</p>-->
    <!-- <p>{JSON.stringify(child)}</p> -->
    <Child child={child}/>
{/each}

{#each pets as pet}
    <Pet pet={pet}/>
{/each}
