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
