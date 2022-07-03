import React, { Component } from 'react';
import '../css/style.css';

class Calculator extends Component {
    state = { 
        symbols : [
            {
                name: '+',
                value: '+'
            },
            {
                name: '-',
                value: '-'
            },
            {
                name: '*',
                value: '*'
            },
            {
                name: '/',
                value: '/'
            },
        ],
        numbers : [
            {
                name: '1',
                value: '1'
            },
            {
                name: '2',
                value: '2'
            },
            {
                name: '3',
                value: '3'
            },
            {
                name: '4',
                value: '4'
            },
            {
                name: '5',
                value: '5'
            },
            {
                name: '6',
                value: '6'
            },
            {
                name: '7',
                value: '7'
            },
            {
                name: '8',
                value: '8'
            },
            {
                name: '9',
                value: '9'
            },
            {
                name: '0',
                value: '0'
            }
        ],
    } 

    handleClick = (value) => {
        let screen = document.getElementById('screen');
        screen.value += value;
        console.log(value);
    }

    calculate = () => {
        let screen = document.getElementById('screen');
        let result = eval(screen.value);
        screen.value = result;
    }

    reset = () => {
        let screen = document.getElementById('screen');
        screen.value = '';
    }

    point = () => {
        let screen = document.getElementById('screen');
        screen.value += '.';
    }

    render() { 
        return (
            
            <div className="calculator">

                <input type="text" className="calculator-screen z-depth-1" value="" disabled id='screen'/>

                <div className="calculator-keys">

                {this.state.symbols.map(symbol => (
                    <button className="operator btn btn-info" key={symbol.value} onClick={() => this.handleClick(symbol.value)}>
                        {symbol.name}
                    </button>
                ))}

                {this.state.numbers.map(number => (
                    <button type="button" className="number btn btn-info" value={number.value} onClick={() => this.handleClick(number.value)} key={number.value}>
                        {number.name}
                    </button>
                ))}

                <button type="button" className="decimal function btn btn-secondary" value="." onClick={() => this.point()}>.</button>
                <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={() => this.reset()}>AC</button>

                <button type="button" className="equal-sign operator btn btn-default" onClick={() => this.calculate()} value="=">=</button>

                </div>
            </div>
        );
    }
}
 
export default Calculator;