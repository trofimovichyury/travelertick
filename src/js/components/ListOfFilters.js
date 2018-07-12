import React from 'react';
import PropTypes from 'prop-types';

// filters
import Filter from './filters/Filter';
import style from './ListOfFilters.module.css';

const ListOfFilters = ({ filters }) => {
    const renderFilters = () => {
        const result = [];
        Object.keys(filters).forEach(key => {
            result.push(
                <li
                    key={key}
                >
                    <Filter
                        filter={filters[key]}
                        filterKey={key}
                    />
                </li>
            )
        });
        return result;
    };

    return (
        <ul className={style.list}>
            {
                renderFilters()
            }
        </ul>
    );
}

ListOfFilters.propTypes = {
    filters: PropTypes.object
};

export default ListOfFilters;