export const APPLY_FILTER = 'APPLY_FILTER';
export const applyFilter = (filter, data, filterKey) => {
    let currentValues;
    console.log(filterKey);
    switch (filter.type) {
        case 'multiple':
            currentValues = [
                ...filter.currentValues
            ];
            if (currentValues.includes(data)) {
                currentValues.splice(currentValues.indexOf(data), 1);
            } else {
                currentValues.push(data);
            }
            break;
        case 'time':
        case 'price':
            currentValues = data;
            break;
    }
    return {
        type: APPLY_FILTER,
        filterKey,
        currentValues
    }
};