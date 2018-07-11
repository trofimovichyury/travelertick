import React, { Component } from 'react';
import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import PriceRange from '../widgets/filters/PriceRange';
import style from './Price.module.css';

class Price extends Component {
    onChange = value => {
        this.props.applyFilter(this.props.filter, value, this.props.filterKey);
    };

    render() {
        const { filter: { initialValues } } = this.props;
        return (
            <div>
                <div className={style.priceWrapper}>
                    <PriceRange
                        onChange={this.onChange}
                        maxValue={initialValues}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    applyFilter: (filter, data, filterKey) => dispatch(applyFilter(filter, data, filterKey))
});

export default connect(null, mapDispatchToProps)(Price);