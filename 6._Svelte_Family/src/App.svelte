<script>
  import Home from "./components/Home.svelte";
  import Parent from "./components/Parent.svelte";

  const parents = ["Jørgen", "Andrea"];
  const children = [
    {
      name: "Søren",
      blackSheep: true
    },
    {
      name: "Laura",
      bright: true,
      isGirl: true
    },
    {
      name: "Anita",
      bright: false
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
