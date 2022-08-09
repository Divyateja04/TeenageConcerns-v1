import React from 'react';
import axios from 'axios';

class VolunteerRegister extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vRegisterName: "",
            vRegisterEmail: "",
            vRegisterPassword: "",
            errorMessage: "",
        }
    }

    onVNameChange = (event) => {
        this.setState({vRegisterName: event.target.value})
    }

    onVEmailChange = (event) => {
        this.setState({vRegisterEmail: event.target.value});
    }

    onVPasswordChange = (event) => {
        this.setState({vRegisterPassword: event.target.value})
    }

    onSubmitVRegister = () => {
        if(this.state.vRegisterEmail.match(/.+@.+/)){
            axios.post('http://localhost:3000/volunteer/register', {
                "name": this.state.vRegisterName,
                "email": this.state.vRegisterEmail,
                "password": this.state.vRegisterPassword
            })
            .then(res => {
                if(res.data.email){
                    this.props.loadVolunteer(res.data);
                    this.props.onRouteChange("vProfile");
                }
            })
            .catch(e => this.setState({errorMessage: e.response.data}));
        }else{
            this.setState({errorMessage: "Enter a valid Email ID"})
        }
    }

    render() {
        return (
            <div className="pa5">
                <main className="pa4 white-80 b--black bg-white br4 shadow-5">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 black">Register</legend>
                        <p className='red'>{this.state.errorMessage}</p>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-main-color hover-white w-100"
                            type="email" name="email-address"
                            onChange={this.onVEmailChange}
                            id="email" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-main-color hover-white w-100"
                            type="text"
                            name="name"
                            required
                            onChange={this.onVNameChange}
                            id="name" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 black"
                            htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-main-color hover-white w-100"
                            type="password"
                            name="password" 
                            required
                            onChange={this.onVPasswordChange}
                            id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                            type="submit"
                            value="Register"
                            required
                            onClick={this.onSubmitVRegister}/>
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('vLogin')}>Sign in</a>
                            <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('home')}>Go Back to Home</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default VolunteerRegister;