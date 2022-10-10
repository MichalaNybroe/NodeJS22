const footer = document.getElementById('footer');

function displayCopyRight() {
    const date = new Date().getFullYear();

    const copyRightPTag = document.createElement('p');
    copyRightPTag.innerText = 'Ⓒ ' + date;
    copyRightPTag.id = 'copyRight';

    footer.appendChild(copyRightPTag);
}

displayCopyRight();
