import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import Checkbox from '../widgets/filters/Checkbox';
import style from './Multiple.module.css';

class Multiple extends Component {
    onChange = value => {
        this.props.applyFilter(this.props.filter, value, this.props.filterKey);
    };

    render() {
        const { filter: { title, initialValues, currentValues } } = this.props;
        return (
            <div>
                <div>{title}</div>
                <ul className={style.list}>
                    {
                        initialValues.map(value => (
                            <li>
                                <Checkbox
                                    value={value}
                                    checked={currentValues.includes(value)}
                                    onChange={this.onChange}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

Multiple.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array
};

Multiple.defaultProps = {
    options: []
};

const mapDispatchToProps = dispatch => ({
    applyFilter: (filter, data, filterKey) => dispatch(applyFilter(filter, data, filterKey))
});

export default connect(null, mapDispatchToProps)(Multiple);
