<script>
    /*https://www.npmjs.com/package/svelte-fa*/
    import Fa from 'svelte-fa';
    import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<footer id="footer">
    <ul>
        <li><Fa icon={faFacebook}/></li>
        <li><Fa icon={faTwitter}/></li>
        <li><Fa icon={faLinkedin}/></li>
        <li><Fa icon={faInstagram}/></li>
    </ul>

    <p>Ⓒ {new Date().getFullYear()} Michala Nybroe | All Rights Reserved</p>

</footer>

<style>
    #footer {
        background-color: #004f83;
        color: white;
        font-size: 5rem;
    }

    ul {
        list-style-type: none;
    }
</style>
