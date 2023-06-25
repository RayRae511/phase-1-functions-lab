// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
    if (blocks >= 42){
    return blocks - 42;
    }else{
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks);
    const feetPerBlock =264;
    if (blocks >= 42){
        return(blocks - 42)* feetPerBlock
    }else{
        return(42 - blocks)*feetPerBlock
    }
}
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
   const feetPerBlock = 264;
   const block = destination - start;
   const totalBlock = block * feetPerBlock;
   return totalBlock;
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
   const feetPerBlock = 264;
   const distance = Math.abs(destination - start);
   const totalFeet = distance * feetPerBlock;

   if (totalFeet <= 400){
    return "Free ride"
   }else if (totalFeet > 400 && totalFeet <= 2000){
    return (totalFeet - 400) * 0.02;
   }else if (totalFeet > 2000 && totalFeet >= 2500){
   return 25
   }else if (totalFeet > 2500){
    return "Cannot travel that far"
   }
}