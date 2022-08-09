import React from 'react';
import axios from 'axios';

class VolunteerLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vLoginEmail: "",
            vLoginPassword: "",
            errorMessage: "",
        }
    }

    onEmailChange = (event) => {
        this.setState({vLoginEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({vLoginPassword: event.target.value})
    }

    onSubmitVLogin = () => {
        axios.post('http://localhost:3000/volunteer/login', {
            "email": this.state.vLoginEmail,
            "password": this.state.vLoginPassword
        })
        .then(res => {
            if(res.data.email){
                this.props.loadVolunteer(res.data);
                this.props.onRouteChange("vProfile");
            }
        })
        .catch(e => this.setState({errorMessage: e.response.data}));
    }

    render() {
        return (
            <div className="pa5">
                <main className="pa4 white-80 b--black bg-white br4 shadow-5">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 black">Sign In</legend>
                        <p className='red'>{this.state.errorMessage}</p>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-main-color hover-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address" 
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-main-color hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                            type="submit"
                            value="Sign in"
                            onClick={this.onSubmitVLogin}/>
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#" className="f6 link dim black db" onClick={() => this.props.onRouteChange('vRegister')}>Sign up</a>
                            <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('home')}>Go Back to Home</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default VolunteerLogin;