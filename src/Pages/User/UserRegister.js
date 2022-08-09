import React from "react";
import axios from "axios";

class UserRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      advisor: "",
      errorMessage: "",
    };
  }

  onCreateUserAccount = () => {
    axios
      .post("http://localhost:3000/user/register", {
        responses: { "Status": "N/A for the moment" }
      })
      .then((res) => {
        if(res.data.id) {
            this.setState({ id: res.data.id, advisor: res.data.advisor });
            this.props.loadUser(this.state.id);
            this.props.onRouteChange('uProfile');
        }
      })
      .catch((e) => this.setState({errorMessage: e.response.data}));
  };

  render() {
    return (
      <div className="pa5">
        <main className="pa4 white-80 b--black bg-white br4 shadow-5">
          <div className="measure center">
            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 black">User</legend>
                <p className='red'>{this.state.errorMessage}</p>
            {/* When adding questions take inspiration from login/register forms of volunteers */}
            </fieldset>
            <div className="mv3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                type="submit"
                value="Start by Making an Account"
                onClick={this.onCreateUserAccount}
              />
            </div>

            <div className="mv3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                type="submit"
                value="Already have an Account?"
                onClick={() => this.props.onRouteChange('uLogin')}
              />
            </div>

            <div className="lh-copy mt3">
              <a href="#" className="f6 link dim black db" onClick={() => this.props.onRouteChange("vRegister")}>
                Want to register as a volunteer and help others?
              </a>
              <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.onRouteChange('home')}>Go Back to Home</a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default UserRegister;
