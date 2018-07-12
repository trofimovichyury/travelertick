import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './FilterResults.module.css';
import { applyFilters } from '../utils/filter';

class FilterResults extends Component {
    renderResults = results => (
        results.map(item => (
            <div
                className={style.item}
                key={item.name}
            >
                {`${item.name} - ${item.supplier}`}
            </div>
        ))
    );

    render() {
        const res = applyFilters(this.props.filters, this.props.results);
        return (
            <div>
                {
                    res.length > 0 ?
                        this.renderResults(res) :
                        <h1>No results</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters,
    results: state.search
});

export default connect(mapStateToProps)(FilterResults);