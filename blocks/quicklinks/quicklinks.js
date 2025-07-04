import { moveInstrumentation } from "../../scripts/scripts.js";

export default function decorate(block) {
    const title = block.firstElementChild;
    title.classList.add("quicklink-title");

    const ul = document.createElement("ul");
    const li = '';
    ul.classList.add("links");

    [...block.children].slice(1).forEach((child) => {
        li = document.createElement("li");
        li.classList.add("link");
        moveInstrumentation(child, li);
        li.append(child);
        console.log("child", li);
    });

    ul.append(li);
    console.log("ul", ul);

    console.log(title);
    console.log(block);

}