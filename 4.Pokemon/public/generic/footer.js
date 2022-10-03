// Copy Right with year
const footer = document.getElementById('footer');

function displayCopyright() {
    const date = new Date().getFullYear();
    const copyR = document.createElement('p');
    copyR.innerText = 'Ⓒ ' + date; 

    footer.appendChild(copyR);
}

displayCopyright();