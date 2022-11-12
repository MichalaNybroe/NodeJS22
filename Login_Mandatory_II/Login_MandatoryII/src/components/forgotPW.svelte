<div id="forgotBox">
    <form id="forgotForm" action="" method="POST">
        <h2>Sign up here!</h2>
            <input type="email" id="forgotEmailInp" placeholder="great@mail.dk" class="input">
            <input type="password" id="forgotPassInp" placeholder="Enter password" class="input">
            <input type="password" id="forgotPassInpTwo" placeholder="Reenter password" class="input">
            <input type="submit" id="forgotSubmit">

    </form>
</div>

<style>
#forgotBox {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    text-align: center;
}

#forgotForm {
    background-color: #004f83;
    padding: 1rem;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 25% 50% 25%;
}

#forgotForm h2 {
    color: white;
    padding: 2rem 0;
    font-size: 1.5rem;
    grid-column: 2/3;
    grid-row: 1;
}

.input {
    padding: 0.5rem;
    grid-column: 2/3;
}

#forgotEmailInp {
    margin-bottom: 2rem;
}

#forgotPassInp {
    margin-bottom: 2rem;
}

#forgotPassInpTwo {
    margin-bottom: 2rem;
}

#forgotSubmit {
    cursor: pointer;
    text-align: center;
    width: 4rem;
    padding: 0.3rem;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    margin: 0 145px;
    grid-row: 5;
    grid-column: 2/3;
}

#forgotSubmit:hover {
    background-color: white;
}
</style>