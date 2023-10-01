// Code your solution in this file!
function distanceFromHqInBlocks(location, location2 = 42) {
    if (location >= location2) {
      return location - location2;      
    }
    if (location < location2) {
      return location2 - location;     
}
}

function distanceFromHqInFeet(location, location2=42) {
    distanceFromHqInBlocks(location, location2=42);
    return distanceFromHqInBlocks(location, location2=42) * 264;
}

function distanceTravelledInFeet(location, location2=42) {
    distanceFromHqInBlocks(location, location2);
    return distanceFromHqInBlocks(location, location2) * 264;
}

function calculatesFarePrice(start, destination) {
    let feets
    if (destination > start) {
        feets =(destination - start) * 264;
    } else if (destination <= start) {
        feets =(start - destination) * 264;
    }

    if (feets <= 400) {
        return 0;
    } else if (feets > 400 && feets <= 2000 ) {
        let value = ((feets - 400) * 0.02);
        return value;
    } else if (feets > 2000 && feets <= 2500) {
        return 25;
    } else if (feets > 2500) {
        return "cannot travel that far";
}
}