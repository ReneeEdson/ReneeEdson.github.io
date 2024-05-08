function getTimeOfDay(time) {
    if (time >= 4 && time <= 11) {
        return "Morning";
    } else if (time >= 12 && time <= 16) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

function isMorning(time) {
    return time >= 4 && time <= 11;
}

function isAfternoon(time) {
    return time >= 12 && time <= 16;
}

function isEvening(time) {
    return (time >= 17 && time <= 23) || (time >= 0 && time <= 3);
}

module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening };
