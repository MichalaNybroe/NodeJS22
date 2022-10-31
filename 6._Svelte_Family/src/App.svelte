<script>
  import Home from "./components/Home.svelte";
  import Parent from "./components/Parent.svelte";

/*
  import { onMount } from "svelte";

  onMount(async () => {
    const response = await fetch("http://localhost:8080/pokemon");
    const result = await response.json();
    console.log(result);
  });
  */


  const parents = ["Jørgen", "Andrea"];
  const children = [
    {
      name: "Søren",
      blackSheep: "ultra-blacksheep"
    },
    {
      name: "Laura",
      brightKid: true,
      isGirl: true,
      blackSheep: "medium-blacksheep"
    },
    {
      name: "Anita",
      brightKid: false
    }
  ];

  const pets = [
    { type: "Cat", name: "Nyx" },
    { type: "Cat", name: "Athena" },
    { type: "Dinosaur", name: "Rexie" }
  ];

</script>

<main>
  <Home>
    <Parent name={parents[0]} children={children} pets={pets}/>
    <Parent name={parents[1]} children={children} pets={pets}/>
  </Home>
</main>

<style>
 
</style>
