import React from 'react';
import { connect } from 'react-redux';

import ListOfFilters from './ListOfFilters';

const Filters = ({ filters }) => (
    <div>
        <ListOfFilters
            filters={filters}
        />
    </div>
);

const mapStateToProps = state => ({
    filters: state.filters,
});

export default connect(mapStateToProps)(Filters);