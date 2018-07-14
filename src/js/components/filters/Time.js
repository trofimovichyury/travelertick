import React, {Component} from 'react';
import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import TimeRange from '../widgets/filters/TimeRange';
import style from './Time.module.css';

const DEPARTURE = 'departure';
const ARRIVE = 'arrive';

class Time extends Component {
    state = {
        minValueForDeparture: 0,
        isOpen: false
    };

    onOpen = () => this.setState({ isOpen: !this.state.isOpen });

    onUpdate = (values, type) => {
        const { filter } = this.props;
        let currentValues;
        if (type === DEPARTURE) {
            const arrival = [
                ...filter.currentValues.arrival
            ];
            this.setState({
                minValueForDeparture: values[0]
            });
            if (arrival[0] < values[0]) {
                arrival[0] = values[0];
            }
            currentValues = {
                arrival,
                departure: values
            };
        } else {
            currentValues = {
                ...filter.currentValues,
                arrival: values
            };
        }
        this.props.applyFilter(filter, currentValues, this.props.filterKey);
    };

    render() {
        const { filter: { title } } = this.props;
        const { isOpen } = this.state;
        return (
            <div>
                <div
                    className={style.titleWrapper}
                    onClick={this.onOpen}
                >
                    <div className={style.title}>
                        <div className={style.titleText}>{title}</div>
                        <div className={`${style.titleArrow} ${isOpen ? style.bottom : style.top}`}/>
                    </div>
                </div>
                <div className={`${style.time} ${isOpen ? style.open : style.closed}`}>
                    <div className={style.timeWrapper}>
                        <TimeRange
                            title="Departure time"
                            type={DEPARTURE}
                            onUpdate={this.onUpdate}
                        />
                    </div>
                    <div className={style.timeWrapper}>
                        <TimeRange
                            title="Arrival time"
                            type={ARRIVE}
                            minValueForDeparture={this.state.minValueForDeparture}
                            onUpdate={this.onUpdate}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    applyFilter: (filter, data, filterKey) => dispatch(applyFilter(filter, data, filterKey))
});

Time.defaultProps = {
    max: 24
};

export default connect(null, mapDispatchToProps)(Time);