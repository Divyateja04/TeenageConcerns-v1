import React from 'react';
import axios from 'axios';

class UserLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            errorMessage: "",
        }
    }

    onIdChange = (event) => {
        this.setState({id: event.target.value})
    }

    onSubmitULogin = () => {
        axios.get(`http://localhost:3000/findadvisor/${this.state.id}`)
        .then(res => {
            if(res.data.advisor){
                this.props.loadUser(this.state.id, res.data.advisor);
                this.props.onRouteChange("uProfile");
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
                                <label htmlFor="name" className="f6 b db mb2 black">Enter your ID <span className="normal black-60">(mandatory)</span></label>
                                <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100"
                                type="text" aria-describedby="name-desc" 
                                onChange={this.onIdChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                            type="submit"
                            value="Sign in"
                            onClick={this.onSubmitULogin}/>
                        </div>
                        <div className="lh-copy mt3">
                            <a href="#" className="f6 link dim black db" onClick={() => this.props.onRouteChange('uRegister')}>Sign up as User</a>
                            <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('home')}>Go Back to Home</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default UserLogin;