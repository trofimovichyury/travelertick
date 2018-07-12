import React from 'react';
import Filters from './Filters';
import FilterResults from './FilterResults';
import style from './SearchPage.module.css';

const SearchPage = () => (
    <main className={style.searchPage}>
        <div className={style.filters}>
            <h2>Filters</h2>
            <Filters/>
        </div>
        <div className={style.filterResults}>
            <h2>Results</h2>
            <FilterResults/>
        </div>
    </main>
);

export default SearchPage;