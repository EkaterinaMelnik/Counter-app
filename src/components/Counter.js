import React, {Component} from 'react';

class Counter extends Component{
    render(){
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <p>Value: {value}</p>
                <button onClick={onIncrement}>
                    +
                </button>
                <button onClick={onDecrement}>
                    -
                </button>
            </div>
        )
    }
}

export default Counter