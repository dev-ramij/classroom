import React, { Component } from 'react';
import './dashLayout.css'
import LoginForm from '../popup/loginForm/loginForm';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import SearchBar from '../common/search-bar/searchBar';


class DashLayout extends Component {

    state = {
        modalShow: false
    }

    showOrHideModal = (ev) => {
        ev.stopPropagation();
        console.log("Modal show: ")
        this.setState({
            modalShow: !this.state.modalShow
        })
    }

    render() {
        return (
            <>
                <AppBar position="fixed">
                    <div className="justify-content-between">
                        <h4>
                            App name
                        </h4>
                        <div className="m-1">
                            <Button variant="contained" className="material-red" color="primary" onClick={this.showOrHideModal}
                            >Login</Button>
                        </div>
                    </div>
                </AppBar>
                <div className="m-1"> 
                    {this.props.children}
                </div>
                <LoginForm show={this.state.modalShow} close={this.showOrHideModal} />


            </>
        );
    }
}

export default DashLayout;