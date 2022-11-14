<script>
    import { Router, Link, Route } from "svelte-navigator"
    import Fa from 'svelte-fa';
    import { faHouse, faUser, faGear, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<nav id="navbar">
    <li id="dropdownMenu"><Fa icon={faBars}/></li>
    <img alt='Logo' id="logo">
    <ul>
        <li class="navIcon"><a href="/home"><Fa icon={faHouse}/></a></li>
        <li class="navIcon"><a href="/contact"><Fa icon={faEnvelope}></Fa></a></li>
        <li class="navIcon"><a href="/profile"><Fa icon={faUser}/></a></li>
        <li class="navIcon"><a href="/settings"><Fa icon={faGear}/></a></li>
    </ul>

    <a id="login" href="/login">Login</a>
</nav>

<style>
    #navbar {
        background-color: #004f83;
        color: white;
        font-size: 5rem;
        width: 100%;
        display: grid;
        grid-template-columns: 5% 10% 5% 20% 10% 30% 5% 10% 5%;
    }

    ul {
        list-style-type: none;
        grid-column: 6/7;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        justify-items: center;
    }

    .navIcon {
        grid-row: 0/1;
    }

    a {
        text-decoration: none;
        color: white;
        border: 2px solid white;
        border-radius: 2rem;
        font-size: 4rem;
        padding: 1rem 1rem;
    }

    a:hover {
        background-color: white;
        color: #004f83;
    }

    #login {
        grid-column: 8/9;
        align-self: center;
        justify-self: center;
    }

    #login:hover {
        font-weight: bold;
    }

    #dropdownMenu:hover {
        cursor: pointer;
    }

    #dropdownMenu {
        list-style-type: none;
        grid-column: 2/3;
        align-self: center;
        justify-self: center;
    }

    #logo {
        grid-column: 4/5;
        align-self: center;
        justify-self: center;
    }

    #logo:hover {
        cursor: pointer;
    }

</style>

