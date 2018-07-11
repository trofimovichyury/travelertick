import React, {Component} from 'react';
import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import TimeRange from '../widgets/filters/TimeRange';
import style from './Time.module.css';

const DEPARTURE = 'departure';
const ARRIVE = 'arrive';

class Time extends Component {
    state = {
        minValueForDeparture: 0
    };

    onUpdate = (values, type) => {
        const { filter } = this.props;
        let currentValues;
        if (type === DEPARTURE) {
            const arrival = [
                ...filter.currentValues.arrival
            ];
            if (arrival[0] < values[0]) {
                this.setState({
                    minValueForDeparture: values[0]
                });
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
        const { title } = this.props;
        console.log(this.props);
        return (
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.timeWrapper}>
                    <TimeRange
                        type={DEPARTURE}
                        onUpdate={this.onUpdate}
                    />
                </div>
                <div className={style.timeWrapper}>
                    <TimeRange
                        type={ARRIVE}
                        minValueForDeparture={this.state.minValueForDeparture}
                        onUpdate={this.onUpdate}
                    />
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