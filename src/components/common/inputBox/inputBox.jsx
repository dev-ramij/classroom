import React, { Component } from 'react';
import './inputBox.css'

class InputBox extends Component {
    state = {}
    render() {
        return (
            <>
                <input type={this.props.type}
                    placeholder={this.props.placeholder} className="input-box" />
            </>
        );
    }
}

export default InputBox;