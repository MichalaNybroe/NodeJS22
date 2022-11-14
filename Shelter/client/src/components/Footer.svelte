<script>
    import { Router, Link, Route } from "svelte-navigator"
    
    /*https://www.npmjs.com/package/svelte-fa*/
    import Fa from 'svelte-fa'
    import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<footer id="footer">
    <ul>
        <li><Fa icon={faFacebook}/></li>
        <li><Fa icon={faTwitter}/></li>
        <li><Fa icon={faLinkedin}/></li>
        <li><Fa icon={faInstagram}/></li>
    </ul>

    <div id="pages">
        <a href="/home" id="fHome">Home</a>
        <a href="/contact" id="fContact">Contact</a>
    </div>

    <p id="rights">Ⓒ {new Date().getFullYear()} Michala Nybroe | All Rights Reserved</p>

</footer>

<style>
    #footer {
        background-color: #004f83;
        color: white;
        font-size: 5rem;
        display: grid;
        grid-column: 30% 40% 30%;
        grid-row: auto;
    }

    ul {
        list-style-type: none;
        grid-row: 1;
        grid-column: 2/3;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin: 3rem;
        justify-items: center;
    }

    ul li {
        font-size: 3rem;
    }

    ul li:hover {
        cursor: pointer;
    }

    #pages {
        grid-row: 2;
        grid-column: 2/3;
        display: grid;
        grid-template-columns: 20% 30% 30% 20%;
    }

    #pages a {
        justify-self: center;
        text-decoration: none;
        font-size: 2rem;
        color: white;
        grid-row: 1;
    }

    #fHome {
        grid-column: 2/3;
    }

    #fContact {
        grid-column: 3/4;
    }

    #rights {
        grid-row: 3;
        grid-column: 1/4;
        justify-self: center;
        font-size: 2rem;
    }
</style>
