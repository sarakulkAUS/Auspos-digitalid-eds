import { moveInstrumentation } from "../../scripts/scripts.js";

export default function decorate(block) {
    const title = block.querySelector("div > p");
    title.classList.add("title");
}