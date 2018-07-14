import React, {Component} from 'react';
import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import { DEPARTURE, ARRIVE, getCurrentValuesOnTimeChanges } from '../../utils/filter';
import TimeRange from '../widgets/filters/TimeRange';
import style from './Time.module.css';

class Time extends Component {
    state = {
        minValueForDeparture: 0,
        isOpen: false
    };

    onOpen = () => this.setState({ isOpen: !this.state.isOpen });

    onUpdate = (values, type) => {
        const { filter } = this.props;
        const currentValues = getCurrentValuesOnTimeChanges(values, type, filter);
        if (type === DEPARTURE) {
            this.setState({
                minValueForDeparture: values[0]
            });
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
                        <div>{title}</div>
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

export default connect(null, mapDispatchToProps)(Time);