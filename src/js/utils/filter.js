import _ from 'lodash';

export const applyFilters = (filters, data) => {
    return _.filter(data, el => {
        let condition = true;
        Object.keys(filters).forEach(key => {
            const filter = filters[key];
            const { currentValues } = filter;
            switch (filter.type) {
                case 'multiple':
                    if (currentValues.length > 0) {
                        condition =  condition && currentValues.includes(el[key]);
                    }
                    break;
                case 'time':
                    const { arrival, departure } = currentValues;
                    condition = condition && timeComparing(arrival, el.arrival) && timeComparing(departure, el.departure);
                    break;
                case 'price':
                    condition = condition && el.price < currentValues;
                    break;
            }
        });
        return condition;
    });
};

export const getTimeText = value => {
    const val = value || '00';
    return value === 24 ? '23:59' : `${val}:00`;
};

const timeComparing = (times, value) => getTimeText(times[0]) <= value && getTimeText(times[1]) >= value;

export const DEPARTURE = 'departure';
export const ARRIVE = 'arrive';

export const getCurrentValuesOnTimeChanges = (values, type, filter) => {
    let currentValues;
    if (type === DEPARTURE) {
        const arrival = [
            ...filter.currentValues.arrival
        ];
        if (arrival[0] < values[0]) {
            arrival[0] = values[0];
        }
        currentValues = {
            arrival,
            departure: values
        };
    } else {
        currentValues = {
            ...filter.currentValues,
            arrival: values
        };
    }
    return currentValues;
};