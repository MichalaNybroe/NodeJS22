<!--Use of svelte components
    + reactivity where we push to array but it does not update(next homework)
    because it is same object not at new one: svelte does not know a change has been made when it is
    not a new object

    dates = dates; now it is displayed
    som en linje kunne det gøres dates = [...dates, date]
-->
<script>
    let date = new Date();
    let dates = [date];

    function updateDate() {
        date = new Date();
        dates.push(date);
        dates = dates; 
    }

</script>

<div>Current date: {date}</div>
<button on:click={updateDate}>Update Date</button>
<div>{JSON.stringify(dates)}</div>