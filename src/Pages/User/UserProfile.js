import React from "react";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  onDeleteUserAccount = (id) => {
    axios
      .delete(`http://localhost:3000/user/delete/${id}`)
      .then((res) => {
        if(res.status !== 400) {
            alert(res.data);
            this.props.onRouteChange('signout');
        }
      })
      .catch((e) => alert(e.response.data));
  };

  render() {
    return (
      <div className="pa5">
        <main className="pa4 white-80 b--black bg-white br4">
          <div className="measure center">
            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 black">User Details</legend>
            {/* When adding questions take inspiration from login/register forms of volunteers */}
            </fieldset>
            <article className="bg-main-color pa3 pa5-ns" data-name="slab-stat">
                <h1 className="f3 f2-ns b">Hello there!</h1>
                <dl className="dib">
                    <dd className="f6 f5-ns b">ID</dd>
                    <dd className="f3 f2-ns b">{this.props.uData.id}</dd>
                    <small id="name-desc" className="f6 white-60 db">Please note this ID down for future purposes.</small>
                </dl>
                <dl className="dib">
                    <dd className="f6 f5-ns b">Your Advisor Details</dd>
                    <dd className="f3 f2-ns b">{this.props.uData.advisor}</dd>
                    <small id="name-desc" className="f6 white-60 db">If it's not showing advisor details try logging out and signing in again</small>
                </dl>
            </article>

            <br />

            <div className="mv3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                type="submit"
                value="Chat with your Advisor"
                onClick={() => this.props.chatWithUser(this.props.uData.id)}
              />
            </div>

            <div className="mv3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                type="submit"
                value="Delete your Account"
                onClick={() => this.onDeleteUserAccount(this.props.uData.id)}
              />
            </div>

            <div className="lh-copy mt3">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                type="submit"
                value="Sign out"
                onClick={() => this.props.onRouteChange('signout')}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default UserProfile;
