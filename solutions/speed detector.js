function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointPer5Km = 1;
    const maxDemeritPoints = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / 5);
        if (points > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

