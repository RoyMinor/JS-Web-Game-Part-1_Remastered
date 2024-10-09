function newNonPlayableCharacter(x, y) {
   let element = newImage('assets/red-character.gif');
   element.style.zIndex = 1;

   let direction = null;

   function moveCharacter() {
    if (direction === 'west') {
        x -= 1
    }
    if (direction === 'north') {
        y += 1
    }
    if (direction === 'east') {
        x += 1
    }
    if (direction === 'south') {
        y -= 1
    }
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
}
   setInterval(moveCharacter, 10);

   async function walkEast(time) {
    // console.log('walking east');
    direction = 'east';
    // element.src = 'assets/red-character.gif';
    await sleep(time);
    stop()
    // console.log('stop walking') 
   }

   async function walkNorth(time) {
    // console.log('walking north');
    direction = 'north';
    // element.src = 'assets/red-character.gif';
    await sleep(time);
    stop();
    // console.log('Stop walking')
   }

   async function walkWest(time) {
    // console.log('walking west');
    direction = 'west';
    // element.src = 'assets/red-character.gif';
    await sleep(time);
    stop();
    // console.log('Stop walking')
   }

   async function walkSouth(time) {
    // console.log('walking south');
    direction ='south';
    // element.src = 'assets/red-character.gif';
    await sleep(time);
    stop();
    // console.log('Stop walking')
   }

   function stop() {
    direction = null;
    element.src = 'assets/red-character.gif';
   }

   function sleep(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    })
   }

   async function loopMovement() {
    while (true) {
      await walkEast(1000);
      await walkNorth(1000);
      await walkWest(1000);
      await walkSouth(1000);
    }
   }
   loopMovement();

   return {
    element: element,
    walkEast: walkEast,
    walkNorth: walkNorth,
    walkWest: walkWest,
    walkSouth: walkSouth,
    stop: stop
   }

}