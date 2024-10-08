// Create playable character
const pc = newPlayableCharacter(100, 110)

// Create non-playable character
const npc = newNonPlayableCharacter(300, 300)

// Move playable character
npc.walkNorth(1400)
    .then(() => npc.walkEast(200))
    .then(() => npc.walkSouth(300))
    .then(() => npc.walkEast(500))
    .then(() => npc.walkSouth(1500))
    .then(() => npc.walkWest(500))
    .then(() => npc.walkNorth(400))

// Create inventory
const inventory = newInventory()
move(inventory).to(0, 0)


// set up other objects in the game
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)