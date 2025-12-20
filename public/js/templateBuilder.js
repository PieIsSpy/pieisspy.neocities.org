function constructHeader() {
    const head = document.querySelector("header");
    const content = document.createElement("h1");
    const link = document.createElement("a");

    link.setAttribute("href", "/index.html");
    link.textContent = "PieIsSpy"

    content.appendChild(link);
    head.appendChild(content);
}

function constructNavigation() {
    const nav = document.querySelector("#navigation");
    const navList = ["blogs", "changelogs"];
    
    const label = document.createElement("h2");
    label.textContent = "Navigation";

    const listHolder = document.createElement("ul");
    navList.forEach((navComponent) => {
        const content = document.createElement("li");
        const link = document.createElement("a");

        link.setAttribute("href", "/" + navComponent + ".html");
        link.textContent = navComponent;

        content.appendChild(link);
        listHolder.appendChild(content);
    });

    nav.appendChild(label);
    nav.appendChild(listHolder);
}

function constructFooter() {
    const foot = document.querySelector("footer");
    const contentList = [
        ["github", "https://github.com/PieIsSpy"], 
        ["neocities", "https://neocities.org/site/pieisspy"], 
        ["source code", "https://github.com/PieIsSpy/pieisspy.neocities.org"]
    ];
    const container = document.createElement("div");
    container.setAttribute("id", "footer-links");

    contentList.forEach((content) => {
        const link = document.createElement("a");
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        link.setAttribute("href", content[1]);
        link.textContent = content[0];

        container.appendChild(link);
    })

    foot.appendChild(container);
}

function main() {
    constructHeader();
    constructNavigation();
    constructFooter();
}

main();