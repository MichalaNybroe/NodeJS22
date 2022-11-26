<script>
    import { Router, Link } from "svelte-navigator"
    
    /*https://www.npmjs.com/package/svelte-fa*/
    import Fa from 'svelte-fa'
    import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<Router primary={false}>
    <footer id="footer">

        <ul id="footerSoMe">
            <!--Need to add links to other pages-->
            <li><Fa icon={faFacebook}/></li>
            <li><Fa icon={faTwitter}/></li>
            <li><Fa icon={faLinkedin}/></li>
            <li><Fa icon={faInstagram}/></li>
        </ul>

        <div id="pages">
            <div id="fHome" class="links"><Link to="/" style="text-decoration: none;"><p>Home</p></Link></div>
            <div id="fAdopt" class="links"><Link to="/adopt" style="text-decoration: none;"><p>Adoption</p></Link></div>
            <div id="fContact" class="links"><Link to="/contact" style="text-decoration: none;"><p>Contact</p></Link></div>
        </div>
    
        <p id="rights">Ⓒ {new Date().getFullYear()} Michala Nybroe | All Rights Reserved</p>

    </footer>
</Router>

<style>
    #footer {
        background-color: #004f83;
        color: white;
        font-size: 5rem;
        display: grid;
        grid-column: 30% 40% 30%;
        grid-row: auto;
    }

    #footerSoMe {
        list-style-type: none;
        grid-row: 1;
        grid-column: 2/3;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        margin: 3rem;
        justify-items: center;
    }

    #footerSoMe li {
        font-size: 3rem;
    }

    #footerSoMe li:hover {
        cursor: pointer;
    }

    #pages {
        grid-row: 2;
        grid-column: 2/3;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
    }

    .links{
        justify-self: center;
        text-decoration: none;
        font-size: 2rem;
        color: white;
        grid-row: 1;
    }

    #fHome {
        grid-column: 2/3;
    }

    #fAdopt {
        grid-column: 3/4;
    }

    #fContact {
        grid-column: 4/5;
    }

    #rights {
        grid-row: 3;
        grid-column: 1/4;
        justify-self: center;
        font-size: 2rem;
    }

    p {
        color: white;
    }
</style>
