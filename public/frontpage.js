const year = document.getElementById('formYear');
const input = document.getElementById('inpYear');

const options = document.querySelectorAll('.clickBar');

const header = document.getElementById('scrollResultHeader');
const author = document.getElementById('scrollResultAuthor');
const image = document.getElementById('scrollResultImage');
const text = document.getElementById('scrollResultText');

const date = document.getElementById('date');

year.addEventListener('submit', (event) => {
    event.preventDefault();

    const inp = input.value;
    translateYear(parseInt(inp));
});

options.forEach((option) => option.addEventListener('click', (event) => {
    event.preventDefault();

    const choice = event.target.id;
    displayBook(parseInt(choice));
}));


function translateYear(year) {
    let translatedYear;

    if (year <= 1880) {
        translatedYear = 1813;
    } else if (year > 1880 && year < 1950) {
        translatedYear = 1937
    } else if (year >= 1950 && year < 1970) {
        translatedYear = 1960;
    } else if (year >= 1970 && year < 2000) {
        translatedYear = 1982;
    } else {
        translatedYear = 2019;
    }

    displayBook(translatedYear);
};

function displayBook(year) {
    switch(year) {
        case 1813: 
            header.innerHTML = 'Pride And Prejudice';
            author.innerHTML = 'Jane Austen';
            image.src = '../images/pAndP.jpg';
            image.style.height = '30rem';
            text.innerText = `Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.`;
            break;
        case 1937:
            header.innerHTML = 'Their Eyes Were Watching God';
            author.innerHTML = 'Zora Neale Hurston';
            image.src = '../images/EWWG.jpg';
            image.style.height = '30rem';
            text.innerText = `Fair and long-legged, independent and articulate, Janie Crawford sets out to be her own person—no mean feat for a black woman in the '30s. Janie's quest for identity takes her through three marriages and into a journey back to her roots.`;
            break;
        case 1960:
            header.innerHTML = 'To Kill a Mockingbird';
            author.innerHTML = 'Harper Lee';
            image.src = '../images/KM.jpg';
            image.style.height = '30rem';
            text.innerText = `The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.
            Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.`;
            break;
        case 1982:
            header.innerHTML = 'The Color Purple';
            author.innerHTML = 'Alice Walker';
            image.src = '../images/CP.jpg';
            image.style.height = '30rem';
            text.innerText = `A powerful cultural touchstone of modern American literature, The Color Purple depicts the lives of African American women in early twentieth-century rural Georgia. Separated as girls, sisters Celie and Nettie sustain their loyalty to and hope in each other across time, distance and silence. Through a series of letters spanning twenty years, first from Celie to God, then the sisters to each other despite the unknown, the novel draws readers into its rich and memorable portrayals of Celie, Nettie, Shug Avery and Sofia and their experience. The Color Purple broke the silence around domestic and sexual abuse, narrating the lives of women through their pain and struggle, companionship and growth, resilience and bravery. Deeply compassionate and beautifully imagined, Alice Walker's epic carries readers on a spirit-affirming journey towards redemption and love.`;
            break;
        case 2019:
            header.innerHTML = 'Girl, Woman, Other';
            author.innerHTML = 'Bernadine Evaristo';
            image.src = '../images/girlWO.jpg';
            image.style.height = '30rem';
            text.innerText = `Teeming with life and crackling with energy — a love song to modern Britain and black womanhood
            Girl, Woman, Other follows the lives and struggles of twelve very different characters. Mostly women, black and British, they tell the stories of their families, friends and lovers, across the country and through the years.
            Joyfully polyphonic and vibrantly contemporary, this is a gloriously new kind of history, a novel of our times: celebratory, ever-dynamic and utterly irresistible.`;
            break;
        default:
            header.innerHTML = '';
            author.innerHTML = "Choose a year to display book";
            image.src = '';
            image.style.height =0;
            text.innerText = ``;
    }
};

/* header.innerHTML = '';
            author.innerHTML = '';
            image.src = '../images/x'
            text.innerText = ``;
            break;
            */


function displayTodaysDate() {
    const today = new Date().toLocaleString().slice(0, 10);
    date.innerText = today;
}
            
displayTodaysDate();