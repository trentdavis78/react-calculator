import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

export class App extends Component {
    state = { 
        displayValue: 0,
        intValue: null,
        valueArray: []
    };

    updateDisplay = value => {
        if(this.state.displayValue === 0) {
            this.setState({ displayValue: value});
        } else if(this.state.intValue) {
            this.setState({ displayValue: value, intValue: null });            
        } else {
            this.setState({ displayValue: this.state.displayValue + value})
        }      
    }
    mathFunction = value => {
        this.state.valueArray.push(this.state.displayValue, value);
        this.setState({ intValue: this.state.displayValue });
        console.log(this.state.valueArray);

    }
    clearDisplay = () => {
        this.setState({ displayValue: 0, intValue: null, valueArray: [] })
    }
    render() {
        return (
            <div className="ui container" id="container">
            <Display value={this.state.displayValue} />
            <Button name="7" styleName="digits" onClick={this.updateDisplay} />
            <Button name="8" styleName="digits" onClick={this.updateDisplay} />
            <Button name="9" styleName="digits" onClick={this.updateDisplay} />
            <Button name="+" styleName="mathButtons" onClick={this.mathFunction}/>
            <Button name="4" styleName="digits" onClick={this.updateDisplay} />
            <Button name="5" styleName="digits" onClick={this.updateDisplay} />
            <Button name="6" styleName="digits" onClick={this.updateDisplay} />
            <Button name="-" styleName="mathButtons" onClick={this.mathFunction}/>
            <Button name="1" styleName="digits" onClick={this.updateDisplay} />
            <Button name="2" styleName="digits" onClick={this.updateDisplay} />
            <Button name="3" styleName="digits" onClick={this.updateDisplay} />
            <Button name="x" styleName="mathButtons" onClick={this.mathFunction}/>
            <Button name="C" styleName="clearButton" onClick={this.clearDisplay} />
            <Button name="0" styleName="digits" onClick={this.updateDisplay} />
            <Button name="=" styleName="mathButtons" onClick={this.updateDisplay} />
            <Button name="/" styleName="mathButtons" onClick={this.mathFunction}/>
            </div>
        )
    }
}

export default App
