import React, {Component} from 'react';

export default class Header extends Component {

    constructor(props){
        super(props);

        this.onReset = this.onReset.bind(this);
    }

    onReset(){
        this.props.onResetTest();
    }

    render() {
        let sv = false, className = 'test';
        if (this.props.resetDisabled === 'true') {
            sv = true;
            className = 'disabled';
        }
        return (
            <header>
                <h1>Pantone colors</h1>
                <button 
                    onClick={this.onReset}
                    disabled = {sv}
                    className= {className}
                >
                    Reset
                </button>
            </header>
        )
    }
}