import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Multiple from '../../../../src/js/components/filters/Multiple';

const filter = {
    initialValues: [
        {}, {}, {}, {}
    ],
    currentValues: []
};

describe('Multiple', () => {
    it('renders no more than defaultShownQuantity', () => {
        const wrapper = shallow(<Multiple defaultShownQuantity={2} filter={filter}/>);
        expect(wrapper.find('li').length).to.equal(2);
    })
});