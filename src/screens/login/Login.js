import React, { Component } from 'react';
import Header from "../../common/header/Header";
import './Login.css';
import Card from "@material-ui/core/Card";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            incorrectUsernamePasswordMessage: "dispNone",
            username: "",
            password: "",
            isLoggedIn: false,
        };
    }

    
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    
    loginClickHandler = () => {
       
        let username = "UpGrad";
        let password = "#Grad@123";

        let accessToken = "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784";
        if (this.state.username === "" || this.state.password === "") {
            this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
            this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
            this.setState({ incorrectUsernamePasswordMessage: "dispNone" });
        } else if (this.state.username === username && this.state.password === password) {
            sessionStorage.setItem("access-token", accessToken);
            this.setState({ 
                isLoggedIn: true,
            });
        } else {
            this.setState({ incorrectUsernamePasswordMessage: "dispBlock" });
        }

    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn === true ?
                <Redirect to= "/home"/>
                :
                    <div>
                        <Header></Header>
                        <Card className="login-card">
                            <p className="login-header">LOGIN</p>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} value = {this.state.username}/>
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} value = {this.state.password}/>
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={this.state.incorrectUsernamePasswordMessage}><span className="red" style={{ fontSize: "14px" }}>Incorrect username and/or password</span></FormHelperText>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler} className="login-btn">LOGIN</Button>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

export default Login;