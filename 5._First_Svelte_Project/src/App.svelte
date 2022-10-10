<script>
    import Date from "./components/Date.svelte";

  const name = "Michala";
  const friend = "Kryger";
</script>

<h2 id="page-title">First Svelte Project</h2>
<div>More content for {name}</div>
<p>{friend} went for a walk</p>
<Date></Date>

<style>
  #page-title {
    color: blue;
  }
</style>