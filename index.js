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


function newItem(imageSrc, left, bottom) {
    const img = createImageElement(imageSrc, left, bottom); // Use the helper function
    document.querySelector('.game-container').append(img); // Append the img element to the body

    // Add event listener for click event
    img.addEventListener('click', function() {
        img.remove(); // Remove the img when it's clicked
        let inventoryItem = document.createElement('img');
        inventoryItem.src = imageSrc;
        inventory.append(inventoryItem); // Append the inventory item to the inventory div
    });
}

let inventory = document.createElement('div')

function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()

// Creating the characters
newImage('assets/green-character.gif', 100, 150);
newImage('assets/pine-tree.png', 200, 100);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

// Creating the items
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);