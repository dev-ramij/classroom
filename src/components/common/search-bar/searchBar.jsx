
// Search bar for general use
import React, { Component } from 'react';
import './searchBar.css';
import AccountCircle from '@material-ui/icons/AccountCircle';

class SearchBar extends Component {
    state = {}


    render() {
        return (
            <>
                <input type="text" placeholder={this.props.placeholder} className="barStyle" onChange={this.props.changeValue} />
            </>
        );
    }
}

export default SearchBar;