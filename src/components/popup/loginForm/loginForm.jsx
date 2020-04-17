import React, { Component } from 'react';
import InputBox from '../../common/inputBox/inputBox';
import './loginForm.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


class LoginForm extends Component {
    state = {
        isLogin: true
    }

    toggleLogInSignUp = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    closeModal = () => {
        this.props.show = false
    }

    LoginTemplate = () => {
        return (
            <>
                <div className="space-between">
                    <h4>
                        Log in
                </h4>
                    <IconButton onClick={this.props.close}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="w3-container w3-center w3-animate-left" >
                    <div className="form">
                        <InputBox type="text" placeholder="Username" />
                        <InputBox type="password" placeholder="Password" />
                        <div className="button">
                            <Button variant="contained" color="primary">Log in</Button>
                        </div>
                        <div className="text-end">
                            <small className="text-success sign-up-link" onClick={this.toggleLogInSignUp}>
                                Create a new account
                        </small>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    SignUpTemplate = () => {
        return (
            <>
                <div className="space-between">
                    <h4>
                        Sign Up
                </h4>
                    <IconButton onClick={this.props.close}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="w3-container w3-center w3-animate-right" >

                    <div className="form">
                        <InputBox type="email" placeholder="Email address" />
                        <InputBox type="text" placeholder="Username" />
                        <InputBox type="text" className="no-margin-bottom" placeholder="Youtube channel name" />
                        <div className="form-check-box">
                            <Checkbox
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                            <small>
                                Same as username
                        </small>
                        </div>

                        <InputBox type="password" placeholder="Password" />
                        <div className="button">
                            <Button variant="contained" color="primary">Sign up</Button>
                        </div>
                        <div className="text-end">
                            <small className="text-success sign-up-link" onClick={this.toggleLogInSignUp}>
                                Already have a account?
                        </small>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <>
                <Dialog
                    open={this.props.show}
                    maxWidth='xs'
                    onClose={this.props.close}
                    disableBackdropClick
                >
                    <DialogContent className="modal-body">
                        {this.state.isLogin &&
                            <this.LoginTemplate />}
                        {!this.state.isLogin && <this.SignUpTemplate className="w3-container w3-center w3-animate-left" />}
                    </DialogContent>
                </Dialog>

            </>
        );
    }
}




export default LoginForm;