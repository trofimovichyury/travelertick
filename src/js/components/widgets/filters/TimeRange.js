import React, {Component} from 'react';

import { getTimeText } from '../../../utils/filter';
import style from './TimeRange.module.css';

class TimeRange extends Component {
    state = {
        values: [0, 24]
    };

    componentDidMount() {
        $(this.slider).slider({
            range: true,
            min: this.props.minValueForDeparture || 0,
            max: 24,
            values: [ 0, 24 ],
            slide: this.onChange
        });
    }

    getSnapshotBeforeUpdate(prevProps) {
        console.log('IN SHAPSHOTS');
        if (this.props.minValueForDeparture && prevProps.minValueForDeparture !== this.props.minValueForDeparture) {
            this.updateValues();
        }
    }

    onChange = (event, data) => {
        const { values } = data;
        this.setState({
            values
        });
        if (typeof this.props.onUpdate === 'function') {
            this.props.onUpdate(values, this.props.type);
        }
    };

    updateValues = () => {
        const firstValue = this.state.values[0];
        const values = [
            ...this.state.values
        ];
        if (firstValue < this.props.minValueForDeparture) {
            values[0] = this.props.minValueForDeparture;
        }
        console.log('UPDATEDDDD');
            this.setState({
                values
            }, () => {
                $(this.slider).slider({
                    range: true,
                    min: this.props.minValueForDeparture,
                    max: 24,
                    values: this.state.values,
                    slide: this.onChange
                });
            });
    };

    getLeftPosition = () => {
        const { max, minValueForDeparture } = this.props;
        const val = this.state.values[0];
        return `calc(${(val - minValueForDeparture)/(max - minValueForDeparture) * 100}% - 8px)`;
    };

    getRightPosition = () => {
        const val = this.state.values[1];
        return `calc(${val/this.props.max * 100}% - 28px)`;
    };

    render() {
        const { title } = this.props;
        return (
            <div className={style.wrapper}>
                <div className={style.title}>{title}</div>
                <div className={style.slider}>
                    <div ref={ref => this.slider = ref}/>
                    <div style={{ position: 'relative'}}>
                        <div
                            className={style.timeValue}
                            style={{
                                left: this.getLeftPosition()
                            }}
                        >
                            {getTimeText(this.state.values[0])}
                        </div>
                        <div
                            className={style.timeValue}
                            style={{
                                left: this.getRightPosition()
                            }}
                        >
                            {getTimeText(this.state.values[1])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TimeRange.defaultProps = {
    max: 24,
    minValueForDeparture: 0
};

export default TimeRange;