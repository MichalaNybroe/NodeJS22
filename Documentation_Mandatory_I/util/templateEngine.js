import fs from "fs";

const nav = fs.readFileSync("./public/generic/nav.html").toString();
const footer = fs.readFileSync("./public/generic/footer.html").toString();

export function renderPage(path, options) {
    const page = fs.readFileSync("./public/pages/" + path).toString();

    return nav.replace("%%TAB_TITLE%%", options.tabTitle || "NodeJs Documentation")
    .replace("%%PAGE_CSS%%", options.pageCss || "")
    + page + footer;
};