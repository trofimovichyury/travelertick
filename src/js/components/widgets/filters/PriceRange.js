import React, {Component} from 'react';
import _ from 'lodash';

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
        $(this.slider).slider({
            range: 'min',
            value: 490,
            min: 0,
            max: 490,
            slide: this.onChange
        });
    }

    onChange = (event, data) => {
        console.log(data);
        this.setState({
            value: data.value
        });
        this.debounceChange(data.value);
    };

    getPosition = () => {
        const val = this.state.value;
        return `calc(${val/this.props.max * 100}% - 37px)`;
    };

    getText = value => `$${value}`;

    render() {
        return (
            <div className={style.wrapper}>
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