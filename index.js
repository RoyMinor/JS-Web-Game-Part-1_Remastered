// Create playable character
const pc = newPlayableCharacter(100, 110)

// Create non-playable character
const npc = newNonPlayableCharacter(50, 200)

// Move playable character
async function moveNPC() {
    await npc.walkNorth(400)
    await npc.walkEast(1000)
    await npc.walkSouth(300)
    await npc.walkEast(500)
    await npc.walkSouth(500)
    await npc.walkWest(400)
    await npc.walkNorth(300)
    stop()
}
moveNPC()
    // .then(() => npc.walkEast(200))
    // .then(() => npc.walkSouth(300))
    // .then(() => npc.walkEast(500))
    // .then(() => npc.walkSouth(500))
    // .then(() => npc.walkWest(500))
    // .then(() => npc.walkNorth(400))

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