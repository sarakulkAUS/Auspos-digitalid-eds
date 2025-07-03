import { buildBlock, createOptimizedPicture } from "../../scripts/aem.js";
import { moveInstrumentation } from "../../scripts/scripts.js";

export default function decorate(block) {
  const heroBanner = document.createElement("div");
  const heroPicture = block.firstElementChild;

  heroBanner.classList.add("hero-banner");
  moveInstrumentation(heroPicture, heroBanner);
  heroBanner.append(heroPicture);

  heroBanner.firstElementChild.classList.add("hero-banner--elements");

  // Add a class to the first child picture element
  const firstPicture = heroBanner.firstElementChild.querySelector("picture");
  if (firstPicture) {
    firstPicture.classList.add("hero-banner--picture");
  }

  // Create a new div for the hero overlay
  const heroBannerTexts = document.createElement("div");
  heroBannerTexts.classList.add("hero-overlay-block");

  // Move overlay content into heroBannerTexts
  [...block.children].slice(0, 3).forEach((child) => {
    if (child) {
      if (!child.querySelector("picture") && child.querySelector("p")) {
        child.classList.add("hero-overlay--text");
      }
      moveInstrumentation(child, heroBannerTexts);
      heroBannerTexts.append(child);
    }
  });

  const heroBannerElements = heroBanner.querySelector(".hero-banner--elements");

  // Append overlay as sibling to picture inside hero-banner--elements
  if (heroBannerElements) {
    heroBannerElements.insertBefore(heroBannerTexts, heroBannerElements.firstChild);
  }

  heroBanner.append(heroBannerElements);

  // create new block with the heroBanner
  const heroOverlayBlock = buildBlock("hero-banner-block", {
    elems: [heroBanner],
  });

  block.append(heroBanner);
}
