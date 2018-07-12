import React from 'react';
import { connect } from 'react-redux';

import style from './Filters.module.css';
import ListOfFilters from './ListOfFilters';

const Filters = ({ filters }) => (
    <div className={style.filters}>
        <div className={style.content}>
            <ListOfFilters
                filters={filters}
            />
        </div>
    </div>
);

const mapStateToProps = state => ({
    filters: state.filters,
});

export default connect(mapStateToProps)(Filters);