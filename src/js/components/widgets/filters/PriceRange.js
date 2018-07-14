import React, {Component} from 'react';
import _ from 'lodash';

import { getRightPosition, initSlider } from '../../../utils/rangeSlider';
import style from './PriceRange.module.css';

class PriceRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.max
        };
        this.debounceChange = _.debounce(this.props.onChange, 200);
    }

    componentDidMount() {
        if (this.slider) {
            initSlider(this.slider, {
                range: 'min',
                value: this.props.max,
                min: 0,
                max: this.props.max,
                slide: this.onChange
            })
        }
    }

    onChange = (event, data) => {
        this.setState({
            value: data.value
        });
        this.debounceChange(data.value);
    };

    getText = value => `$${value}`;

    render() {
        return (
            <div className={style.wrapper}>
                <div ref={ref => this.slider = ref}/>
                <div className={style.textWrapper}>
                    <div
                        ref={ref => this.priceText = ref}
                        className={style.value}
                        style={{
                            left: getRightPosition(this.state.value, this.props.max, '22px')
                        }}
                    >
                        {this.getText(this.state.value)}
                    </div>
                </div>
            </div>
        )
    }
}

PriceRange.defaultProps = {
    max: 490
};

export default PriceRange;