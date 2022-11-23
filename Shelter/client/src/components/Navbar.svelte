<script>
    import { Router, Link, Route } from "svelte-navigator"
    import Fa from "svelte-fa"
    import { faHouse, faGear, faEnvelope, faShieldDog } from "@fortawesome/free-solid-svg-icons"
    import Home from "../pages/Home/Home.svelte"
    import Adoption from "../pages/Adoption/Adoption.svelte"
    import Contact from "../pages/Contact/Contact.svelte"
    import Settings from "../pages/Settings/Settings.svelte"
    import Login from "../pages/Login/Login.svelte"
</script>

<Router>
    <nav id="navbar">
        <div id="logoDiv"><Link to="/"><img alt="Shelter Logo" src="../../logo.png" id="logo"></Link></div>
        <div id="navHouseDiv"><Link to="/" id="house"><p class="navIcon" ><Fa icon={faHouse}/></p></Link></div>
        <div id="navDogDiv"><Link to="/adopt"><p class="navIcon"><Fa icon={faShieldDog}/></p></Link></div>
        <div id="navEnvDiv"><Link to=/contact><p class="navIcon"><Fa icon={faEnvelope}/></p></Link></div>
        <div id="navGearDiv"><Link to="/settings"><p class="navIcon"><Fa icon={faGear}/></p></Link></div>
   
        <div id="navLoginDiv"><Link to="/login" style="text-decoration: none;"><p class="navIcon" id="login">Login</p></Link></div>
    </nav>

    <Route path="/"><Home /></Route>
    <Route path="/adopt"><Adoption /></Route>
    <Route path="/contact"><Contact /></Route>
    <Route path="/settings"><Settings /></Route>
    <Route path="/login"><Login /></Route>
</Router>

<style>
    #navbar {
        background-color: #004f83;
        color: white;
        width: 100%;
        display: grid;
        grid-template-columns: 5% 20% 5% 10% 10% 10% 10% 5% 20% 5%;
    }

    #logoDiv {
        grid-column: 2/3;
        justify-self: center;
    }

    #logo {
        grid-column: 2/3;
        width: 14rem;
    }

    #logo:hover {
        cursor: pointer;
    }

    .navIcon {
        color: white;
        border: 2px solid white;
        border-radius: 2rem;
        font-size: 4rem;
        padding: 1rem 1.2rem;
    }

    .navIcon:hover {
        background-color: white;
        color: #004f83;
    }

    #navHouseDiv {
        grid-column: 4/5;
        justify-self: center;
        width: 60%;
    }

    #navDogDiv {
        grid-column: 5/6;
        justify-self: center;
        width: 60%;
    }

    #navEnvDiv {
        grid-column: 6/7;
        justify-self: center;
        width: 60%;
    }

    #navGearDiv {
        grid-column: 7/8;
        justify-self: center;
        width: 60%;
    }

    #login {
        grid-column: 8/9;
        align-self: center;
        justify-self: center;
        text-decoration: none;
    }

    #login:hover {
        font-weight: bold;
    }

    #navLoginDiv {
        grid-column: 9/10;
        justify-self: center;
    }
</style>

