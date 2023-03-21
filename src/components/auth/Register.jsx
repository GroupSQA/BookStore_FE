import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    url = "http://localhost:8080/register"

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            username: '',
            email: '',
            password: ''
        })
        const Account = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(this.url, Account)
            .then(res => {
                console.log(res);
                if (res.status === 201) {
                    window.location = "/";
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        id='username'
                        className="form-control"
                        placeholder="Enter username"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        id='email'
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        id='password'
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <Button type="submit" className="btn" variant="outline-dark">
                        Submit
                    </Button>
                </div>
            </form>
        )
    }
}