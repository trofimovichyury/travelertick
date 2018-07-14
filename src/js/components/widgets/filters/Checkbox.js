import React from 'react';

import style from './Checkbox.module.css';

const Checkbox = ({ value, checked, onChange }) => {
    return (
        <label className={style.label}>
            <span className={`${style.box} ${ checked ? style.checked : ''}`} />
            <span className={style.name}>{value}</span>
            <input type="checkbox" className={style.checkbox} onChange={() => onChange(value)} />
        </label>
    );
}

export default Checkbox;