<div id="loginBox">
    <form action="/login" method="POST" id="loginForm">
        <h4>Sign In!</h4><br>
        <label for="email">Email:</label>
        <input type="email" class="input" name="email" placeholder="great@mail.dk" id="email"><br>
        <label for="password">Password:</label>
        <input type="password" class="input" name="password" placeholder="Enter password" id="password">
        <button type="button" id="forgotPW" onclick="window.location.href='/forgotPassword'">Forgot your password?</button><br>
        <input type="submit" id="logButton" value="Login">
    </form>
    <button type="button" id="signUp" onclick="window.location.href='/signUp"></button>
</div>

<style>

#loginBox {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    text-align: center;
}

#loginForm {
    background-color: #004f83;
    padding: 1rem;
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-gap: 1rem;
}

#loginForm h4 {
    color: white;
    padding: 1rem 0;
    font-size: 1.5rem;
    grid-column: 2/3;
    grid-row: 1;
}

#loginForm label {
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    grid-column: 2/3;
}

.input {
    padding: 0.5rem;
    grid-column: 2/3;
}

#logButton {
    cursor: pointer;
    text-align: center;
    width: 4rem;
    padding: 0.3rem;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    margin: 0 145px;
    grid-row: 7;
    grid-column: 2/3;
}

#logButton:hover {
    background-color: white;
}

#forgotPW {
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: white;
    grid-row: 6;
    text-align: center;
    grid-column: 2/3;
}

#forgotPW:hover {
    cursor: pointer;
    font-weight: bold;
}
</style>