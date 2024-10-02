// Helper function to create and configure an image element
function createImageElement(imageSrc, left, bottom) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.position = 'absolute';
    img.style.left = left + 'px';
    img.style.bottom = bottom + 'px';
    return img; // Return the configured img element
}

function newImage(imageSrc, left, bottom) {
    const img = createImageElement(imageSrc, left, bottom); // Use the helper function
    document.querySelector('.game-container').append(img); // Append the img element to the body
}

// Creating the characters
newImage('assets/green-character.gif', 100, 150);
newImage('assets/pine-tree.png', 200, 100);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

function newItem(imageSrc, left, bottom) {
    const img = createImageElement(imageSrc, left, bottom); // Use the helper function
    document.querySelector('.game-container').append(img); // Append the img element to the body

    // Add event listener for click event
    img.addEventListener('dblclick', function() {
        img.remove(); // Remove the img when it's clicked
    });
}

// Creating the items
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);