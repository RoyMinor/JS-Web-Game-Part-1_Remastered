function newNonPlayableCharacter(x, y) {
   let element = newImage('assets/red-character/static.gif');
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
   setInterval(moveCharacter, 1);

   function walkEast(time) {
    direction = 'north';
    element.src = 'assets/red-character.gif';
     return new Promise((resolve) => {
      console.log('Character is walking east');
       setTimeout(() => {
         console.log('Character has stopped walking east');
         resolve();
       }, time);
     })
   }

   function walkNorth(time) {
    direction = 'north';
    element.src = 'assets/red-character.gif';
    return new Promise((resolve) => {
      console.log('Character is walking north');
       setTimeout(() => {
         console.log('Character has stopped walking north');
         resolve();
       }, time);
    })
   }

   function walkWest(time) {
    direction = 'west';
    element.src = 'assets/red-character.gif';
    return new Promise((resolve) => {
      console.log('Character is walking west');
       setTimeout(() => {
         console.log('Character has stopped walking west');
         resolve();
       }, time);
    })
   }

   function walkSouth(time) {
    direction ='south';
    element.src = 'assets/red-character.gif';
    return new Promise((resolve) => {
      console.log('Character is walking south');
       setTimeout(() => {
         console.log('Character has stopped walking south');
         resolve();
       }, time);
    })
   }

   function stop() {
    direction = null;
    element.src = 'assets/red-character.gif';
   }

   return {
    element: element,
    walkEast: walkEast,
    walkNorth: walkNorth,
    walkWest: walkWest,
    walkSouth: walkSouth,
    stop: stop
   }

}