import { updateTimes, initializeTimes } from './Main.js'

test ('Available Times initializeTimes', () => {
    expect(initializeTimes()).toStrictEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ])
});

test ('Available Times updateTimes - no date', () => {
    const times0 = initializeTimes();
    const times1 = updateTimes(times0, {})
    expect(times1).toStrictEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ])
});

test ('Available Times updateTimes - 05/26/2023', () => {
    const times0 = initializeTimes();
    const times1 = updateTimes(times0, {date: "05/26/2023"})
    expect(times1).toStrictEqual([
        "17:00",
        "17:30",
        "19:00",
        "20:00",
        "20:30",
        "21:30",
        "22:00",
        "22:30"
    ])
});