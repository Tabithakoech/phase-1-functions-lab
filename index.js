// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
        if (blocks > 42 )
            return (blocks - 43 ) + 1
        else if (blocks < 42) 
            return (blocks * (-1)) + 42
        }
    


function distanceFromHqInFeet(blocks) {
    let feet = 264
    return distanceFromHqInBlocks(blocks) * feet
   
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
    function distanceTravelledInFeet(pointA,pointB){
            //returns the number of feet traveled

        return  Math.abs(pointA - pointB) * 264
  
  }

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
        let totalDistance = distanceTravelledInFeet(start,destination) 
        if (totalDistance <= 400){
            return 0
        }
        else if  (totalDistance > 400 && totalDistance <= 2000){
            return (totalDistance - 400) * .02
        } 
        else if (totalDistance > 2000 && totalDistance < 2500){
            return 25
        }
        else (totalDistance > 2500);{
            return 'cannot travel that far'
        }
    }
