<h2>Welcome to Shelter</h2>
<h3>The work we do</h3>
<p>We do ....</p>

<div id="columns">
    <!--Potentially different pictures or cases that should be clickable-->
    <img alt="Column coming soon" src="../../logo.png" class="column" id="columnOne">
    <img alt="Column coming soon" src="../../logo.png" class="column" id="columnTwo">
    <img alt="Column coming soon" src="../../logo.png" class="column" id="columnThree">
</div>


<style>
    * {
        color: #29353D;
    }
    h2 {
        font-size: 5rem;
        text-align: center;
    }

    h3 {
        padding-top: 3rem;
        text-align: center;
        font-size: 2rem;
    }

    p {
        text-align: center;
    }

    #columns {
        width: 100%;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        margin-bottom: 2rem;
        margin-bottom: 4rem;
    }

    .column {
        align-self: stretch;
    }

    .column:hover {
        cursor: pointer;
    }

    #columnOne {
        grid-column: 2/3;
    }

    #columnTwo {
        grid-column: 3/4;
    }

    #columnThree {
        grid-column: 4/5;
    }
</style>