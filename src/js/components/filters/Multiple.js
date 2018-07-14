import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../widgets/filters/Checkbox';
import style from './Multiple.module.css';

export default class Multiple extends Component {
    constructor(props) {
        super(props);
        const { filter: { initialValues } } = props;
        this.state = {
            ifSeeAllIsVisible: initialValues.length > props.defaultShownQuantity
        };
    }

    onChange = value => {
        this.props.applyFilter(this.props.filter, value, this.props.filterKey);
    };

    showAll = () => this.setState({ ifSeeAllIsVisible: false });

    renderItem = (value, i) => {
        const { filter: { currentValues }, defaultShownQuantity } = this.props;
        return (
            i < defaultShownQuantity || !this.state.ifSeeAllIsVisible ?
                <li
                    className={style.item}
                    key={i}
                >
                    <Checkbox
                        value={value}
                        checked={currentValues.includes(value)}
                        onChange={this.onChange}
                    />
                </li> :
                null
        );
    };

    render() {
        const { filter: { title, initialValues } } = this.props;
        const { ifSeeAllIsVisible } = this.state;
        return (
            <div className={style.multiple}>
                <div className={style.title}>{title}</div>
                <ul>
                    {initialValues.map(this.renderItem)}
                </ul>
                {
                    ifSeeAllIsVisible ?
                        <div
                            className={style.showAll}
                            onClick={this.showAll}
                        >
                            see all
                        </div> :
                        null
                }
            </div>
        )
    }
}

Multiple.propTypes = {
    filter: PropTypes.object,
    defaultShownQuantity: PropTypes.number
};

Multiple.defaultProps = {
    defaultShownQuantity: 5
};
