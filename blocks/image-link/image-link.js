export default function decorate(block) {
  const link = block.querySelector("a");
  link.text = ""; // Clear the link text to avoid duplication
  const image = block.querySelector("picture");
  if (link) {
    if (image) {
      // Move the image inside the link
      link.appendChild(image);
    }
    // Add a class to the block for styling
    block.classList.add("image-link");
  }
}
