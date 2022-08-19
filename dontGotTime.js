/*
Given a time window for a room's availability
return the start time of all appointments possible that don't conflict
with an existing appointment schedule in an array
each possible interval is 30 mins long

Example:
A room might be open from 12 -> 16 (noon to 4pm)
we have 4 appointments already on the books
[
    {
        startTime: 12:30,
        endTime: 12:45,
    },
    {
        startTime: 13:30,
        endTime: 14:00,
    },
    {
        startTime: 14:30,
        endTime: 15:30,
    },
    {
        startTime: 15:45,
        endTime: 16:00,
    },
]

should return [12, 13, 14] in timestamp / human readable form
*/

const staticDay = new Date().setUTCHours(0,0,0,0);
const currentDayStart = staticDay;

const standardInterval = 0.5;
const convertedStandardInterval = (standardInterval * 60) * 60000;

const currentDateOpen = new Date(currentDayStart).setUTCHours(12);
const currentDateClose = new Date(currentDayStart).setUTCHours(16);

const timeSet = new Set();

const createTimeStamp = (hours, minutes) => {
    const time = new Date(currentDayStart).setUTCHours(hours ?? 0, minutes ?? 0);
    return time;
};

const printTime = (input) => {
    return new Date(input).toUTCString();
};

const bookedAppointments = [
    {
        startTime: createTimeStamp(12, 30),
        endTime: createTimeStamp(12, 55),
    },
    {
        startTime: createTimeStamp(13, 45),
        endTime: createTimeStamp(14, 0),
    },
    {
        startTime: createTimeStamp(15, 0),
        endTime: createTimeStamp(15, 30),
    },
    {
        startTime: createTimeStamp(15, 45),
        endTime: createTimeStamp(16, 0),
    },
];

const intervalCount = (currentDateClose - currentDateOpen) / convertedStandardInterval;

let timeIndex = currentDateOpen;

for(let i = 0; i < intervalCount; i++) {
    const desiredEnd = timeIndex + convertedStandardInterval;

    let conflict = false;

    bookedAppointments.forEach((booked) => {
        const { startTime, endTime } = booked;

        const overlappingHead = startTime < desiredEnd && endTime >= desiredEnd;

        const overlappingTail = startTime <= timeIndex && endTime > timeIndex;

        const insideInterval = startTime >= timeIndex && endTime <= desiredEnd;

        const exactMatch = startTime === timeIndex && endTime === desiredEnd;
        
        if(overlappingHead || overlappingTail || insideInterval || exactMatch) {
            conflict = true;
        }

    });

    if(conflict === false) {
        timeSet.add(timeIndex);
    }

    timeIndex = desiredEnd;
}

const times = Array.from(timeSet);
const convertTimes = times.map((time) => new Date(time).toUTCString());
console.log('times', times);
console.log('converted times', convertTimes);
