import React, {Component} from 'react';

import { getTimeText } from '../../../utils/filter';
import { getLeftPosition, getRightPosition, initSlider } from '../../../utils/rangeSlider';
import style from './TimeRange.module.css';

class TimeRange extends Component {
    state = {
        values: [0, 24]
    };

    componentDidMount() {
        this.initSlider();
    }

    getSnapshotBeforeUpdate(prevProps) {
        if (prevProps.minValueForDeparture !== this.props.minValueForDeparture) {
            this.updateValues();
        }
    }

    initSlider = () => {
        if (this.slider) {
            initSlider(this.slider, {
                range: true,
                min: this.props.minValueForDeparture || 0,
                max: 24,
                values: this.state.values,
                slide: this.onChange
            });
        }
    };

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
        this.setState({
            values
        }, this.initSlider);
    };

    render() {
        const { title, max, minValueForDeparture } = this.props;
        const { values } = this.state;
        return (
            <div className={style.wrapper}>
                <div className={style.title}>{title}</div>
                <div className={style.slider}>
                    <div ref={ref => this.slider = ref}/>
                    <div style={{ position: 'relative'}}>
                        <div
                            className={style.timeValue}
                            style={{
                                left: getLeftPosition(values[0], minValueForDeparture, max, '8px')
                            }}
                        >
                            {getTimeText(this.state.values[0])}
                        </div>
                        <div
                            className={style.timeValue}
                            style={{
                                left: getRightPosition(values[1], max, '28px')
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