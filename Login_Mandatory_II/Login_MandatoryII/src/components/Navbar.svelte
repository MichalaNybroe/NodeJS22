<script>
    import Fa from 'svelte-fa';
    import { faHouse, faUser, faGear, faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<nav id="navbar">
    <Fa icon={faBars}/>
    <img alt='Logo'>
    <ul>
        <li><a href="/home"><Fa icon={faHouse}/></a></li>
        <li><a href="/profile"><Fa icon={faUser}/></a></li>
        <li><a href="/settings"><Fa icon={faGear}/></a></li>
    </ul>

    <a id="login" href="/login">Login</a>
</nav>

<style>
    #navbar {
        background-color: #004f83;
        color: white;
        font-size: 5rem;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>