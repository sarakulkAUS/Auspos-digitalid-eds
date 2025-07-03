export default function decorate(block) { 
    console.log('Decorating card block:', block);
    // Ensure the block has the necessary structure
    const { icon, title, description, classes } = block;

    const card = document.createElement('div');
    card.classList.add('card', ...classes);

    if (icon) {
        const iconElement = document.createElement('div');
        iconElement.classList.add('icon', ...classes);
        iconElement.style.backgroundImage = `url(${icon})`;
        card.appendChild(iconElement);
    }

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    card.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    card.appendChild(descriptionElement);

    return card;
}