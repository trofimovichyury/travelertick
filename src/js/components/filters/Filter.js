import React from 'react';
import PropTypes from 'prop-types';
import filterMapping from './index';

const Filter = ({ filter, filterKey }) => (
    <div>
        {
            React.createElement(
                filterMapping[filter.type],
                { filter, filterKey }
            )
        }
    </div>
);

Filter.propTypes = {
    type: PropTypes.string
};

export default Filter;