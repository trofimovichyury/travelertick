import { expect } from 'chai';
import reducer from '../../../src/js/reducers/Filters';
import { APPLY_FILTER } from '../../../src/js/action/Filters';

const initialState = {
    supplier: {
        currentValues: []
    }
};

describe('Measurements', () => {
    it('returns the initial state if action is unknown', () => {
        expect(
            reducer(initialState, {})
        ).to.deep.equal(initialState);
    });

    describe('APPLY_FILTERS', () => {
        it('updates current values accordingly', () => {
            const currentValues = [
                'value1',
                'value2'
            ];
            const expectedState = {
                supplier: {
                    currentValues
                }
            };
            expect(
                reducer(initialState, {
                    type: APPLY_FILTER,
                    filterKey: 'supplier',
                    currentValues
                })
            ).to.deep.equal(expectedState);;
        })
    });
});