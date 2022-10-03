// SSR :
import fs from "fs"; // importerer filsystem


const nav = fs.readFileSync("./public/generic/navbar.html").toString();
const footer = fs.readFileSync("./public/generic/footer.html").toString();

export function renderPage(path, options) {
    const page = fs.readFileSync("./public/pages/" + path).toString();

    return nav
    .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
    .replace("%%PAGE_CSS_LINK%%", options.cssLink || "")
        + page + footer;
};


//laver en sandwich SSR
//const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html");
//export const frontpagePage = nav.replace("%%TAB_TITLE%%", "Pokemon frontpage").replace("%%PAGE_CSS_LINK%%", `<link rel="stylesheet" href="../pages/frontpage/frontpage.css">`) 
//    + frontpage + footer;

//const battlepage = fs.readFileSync("./public/pages/battle/battle.html");
//export const battlepagePage = nav.replace("%%PAGE_CSS_LINK%%", `<link rel="stylesheet" href="../pages/battle/battle.css">`)
 //   + battlepage + footer;

//const contactpage = fs.readFileSync("./public/pages/contact/contact.html");
//export const contactpagePage = nav.replace("%%TAB_TITLE%%", "Pokemon contactpage").replace("%%PAGE_CSS_LINK%%", `<link rel="stylesheet" href="../pages/contact/contact.css">`) 
 //   + contactpage + footer;