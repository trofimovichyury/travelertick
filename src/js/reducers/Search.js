const initialState = [{
    "name": "Danang Night Express",
    "supplier": "Flixbus",
    "price": 38,
    "departure": "20:30",
    "arrival": "05:45",
    "type": "Bus"
}, {
    "name": "Danang Day Express",
    "supplier": "Flixbus",
    "price": 30,
    "departure": "10:30",
    "arrival": "15:45",
    "type": "Bus"
}, {
    "name": "Koh Phangan Speedboat",
    "supplier": "Seatran",
    "price": 52,
    "departure": "13:15",
    "arrival": "15:50",
    "type": "Ferry"
},{
    "name": "Trans Siberian",
    "supplier": "Russian Railways",
    "price": 99.99,
    "departure": "02:30",
    "arrival": "23:59",
    "type": "Train"
}, {
    "name": "Koh Phangan Super Speedboat",
    "supplier": "Seatran",
    "price": 84,
    "departure": "14:15",
    "arrival": "15:00",
    "type": "Ferry"
}, {
    "name": "The Magic School Bus",
    "supplier": "Flixbus",
    "departure": "13:15",
    "arrival": "19:00",
    "price": 9
}, {
    "name": "Koh Samui Express",
    "supplier": "Ocean Jet",
    "price": 84,
    "departure": "05:15",
    "arrival": "10:00",
    "type": "Ferry"
}, {
    "name": "Hogwarts express",
    "supplier": "Hogwarts",
    "price": 123,
    "departure": "07:00",
    "arrival": "19:00",
    "type": "Train"
}, {
    "name": "Santa Maria",
    "supplier": "Colombus",
    "departure": "02:30",
    "arrival": "15:00",
    "type": "Ferry"
}];

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};