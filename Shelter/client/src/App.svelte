<script>
  import Navbar from "./components/Navbar.svelte"
  import Footer from "./components/Footer.svelte"

  import { Router, Route } from "svelte-navigator"
  import Home from "./pages/Home/Home.svelte"
  import Adoption from "./pages/Adoption/Adoption.svelte"
  import Contact from "./pages/Contact/Contact.svelte"

  import Settings from "./pages/Settings/Settings.svelte"

  import Login from "./pages/Login/Login.svelte"
  import ForgotPassword from "./pages/ForgotPasssword/ForgotPassword.svelte"
  import SignUp from "./pages/SignUp/SignUp.svelte"
</script>

<main>
  <Router>
  <Navbar></Navbar>
  
    <main>
      <Route path="/"><Home /></Route>
      <Route path="/adopt"><Adoption /></Route>
      <Route path="/contact"><Contact /></Route>
      <Route path="/settings"><Settings /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/forgotPassword"><ForgotPassword /></Route>
      <Route path="/signUp"><SignUp /></Route>
    </main> 
  
  <Footer></Footer>
</Router>
</main>


