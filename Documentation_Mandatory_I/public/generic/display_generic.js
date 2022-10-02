const header = document.getElementById('header');
const footer = document.getElementById('footer');

function display() {
    createHeader();
    createFooter();
};

function createHeader() {
    const pageHeader = document.createElement('h2');
    pageHeader.innerText = 'Node Documentation';

    const ul = document.createElement('ul');

    const homeLi = createLiTag();
    const home = createATag('/', 'Home');
    homeLi.appendChild(home);

    const basicBuildLi = createLiTag();
    const basicBuild = createATag('/', 'App set-up');
    basicBuildLi.appendChild(basicBuild);

    const triviaLi = createLiTag();
    const trivia = createATag('/', 'Node Trivia');
    triviaLi.appendChild(trivia);

    const commandLi = createLiTag();
    const command = createATag('/', 'Commands');
    commandLi.appendChild(command);

    ul.appendChild(homeLi);
    ul.appendChild(basicBuildLi);
    ul.appendChild(triviaLi);
    ul.appendChild(commandLi);

    header.appendChild(pageHeader);
    header.appendChild(ul);
};

function createFooter() {
    const creator = document.createElement('h3');
    creator.innerText = 'The Creator: Michala Nybroe';

    const linkedin = createATag('linkedin.com/in/michalanybroe', 'LinkedIn');
    linkedin.id = 'linkedin';

    const github = createATag('github.com/MichalaNybroe', 'Github');
    github.id = 'github';

    footer.appendChild(creator);
    footer.appendChild(linkedin);
    footer.appendChild(github);
};

function createLiTag() {
    return document.createElement('li');
}

function createATag(href, text) {
    const aTag = document.createElement('a');
    aTag.href = href;
    aTag.innerText = text;
    return aTag;
}

display();
