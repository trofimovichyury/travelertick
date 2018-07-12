import { APPLY_FILTER } from '../action/Filters';

const initialState = {
    supplier: {
        type: 'multiple',
        title: 'Supplier',
        initialValues: [
            'Flixbus',
            'Seatran',
            'Russian Railways',
            'Ocean Jet',
            'Hogwarts',
            'Colombus'
        ],
        currentValues: []
    },
    type: {
        type: 'multiple',
        title: 'Type',
        initialValues: [
            'Bus',
            'Ferry',
            'Train'
        ],
        currentValues: []
    },
    time: {
        type: 'time',
        title: 'Departure',
        initialValues: {
            departure: [0, 24],
            arrival: [0, 24]
        },
        currentValues: {
            departure: [0, 24],
            arrival: [0, 24]
        }
    },
    price: {
        type: 'price',
        title: 'Price',
        initialValues: 500,
        currentValues: 500
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLY_FILTER:
            return {
                ...state,
                [action.filterKey]: {
                    ...state[action.filterKey],
                    currentValues: action.currentValues
                }
            };
        default:
            return state;
    }
};