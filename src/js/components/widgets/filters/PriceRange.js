import React, {Component} from 'react';
import _ from 'lodash';

import style from './PriceRange.module.css';

class PriceRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.maxValue
        };
        this.debounceChange = _.debounce(this.props.onChange, 200);
    }

    componentDidMount() {
        $(this.slider).slider({
            range: 'min',
            value: this.props.maxValue,
            min: 0,
            max: this.props.maxValue,
            slide: this.onChange
        });
    }

    onChange = (event, data) => {
        this.setState({
            value: data.value
        });
        this.debounceChange(data.value);
    };

    getPosition = () => {
        const val = this.state.value;
        return `${val/this.props.max * 100}%`;
    };

    getText = value => `${value}$`;

    render() {
        const { title } = this.props;
        return (
            <div className={style.wrapper}>
                <div>{title}</div>
                <div ref={ref => this.slider = ref}/>
                <div
                    className={style.value}
                    style={{
                        left: this.getPosition()
                    }}
                >
                    {this.getText(this.state.value)}
                </div>
            </div>
        )
    }
}

PriceRange.defaultProps = {
    max: 490
};

export default PriceRange;