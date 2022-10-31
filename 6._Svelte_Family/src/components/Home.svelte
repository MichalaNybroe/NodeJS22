<script>
    import { fridgeMessageStore } from "../store/fridgeBulletinStore.js";

    console.log($fridgeMessageStore); //$ foran betyder at tilgå værdien
</script>

<h3>Family Home</h3>

<p> ------------------ </p>
<p>|      Welcome     |</p>
<p> ------------------ </p>

<h4>Fridge Bulletin</h4>
<p>{$fridgeMessageStore}</p>    

<slot></slot>
