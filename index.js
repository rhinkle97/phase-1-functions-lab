const block = 264;

function distanceFromHqInBlocks(distanceInBlocks) {
    return Math.abs(distanceInBlocks - 42);
  }

  function distanceFromHqInFeet(distanceInBlocks) {
    return distanceFromHqInBlocks(distanceInBlocks) * block;
  }

  function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * block);
  }

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else (distanceTravelledInFeet(start, destination) > 2500)
        // console.log("num25: ", 264);
        return 'cannot travel that far';
  }