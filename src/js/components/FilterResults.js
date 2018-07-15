import React from 'react';
import { connect } from 'react-redux';

import style from './FilterResults.module.css';
import { applyFilters } from '../utils/filter';

const FilterResults = ({ filters, results }) => {
    const renderResults = res => (
        res.map(item => (
            <div
                className={style.item}
                key={item.name}
            >
                {`${item.name} - ${item.supplier}`}
            </div>
        ))
    );

    const res = applyFilters(filters, results);
    return (
        <div>
            {
                res.length > 0 ?
                    renderResults(res) :
                    <h1>No results</h1>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    filters: state.filters,
    results: state.search
});

export default connect(mapStateToProps)(FilterResults);