import React from 'react';

class VolunteerProfile extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pa5">
            <main className="pa4 white-80 b--black bg-white br4">
            <div className="measure center">
                <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 black">User Details</legend>
                {/* When adding questions take inspiration from login/register forms of volunteers */}
                </fieldset>
                <article className="bg-main-color pa3 pa5-ns br4" data-name="slab-stat">
                    <h1 className="f3 f2-ns b">Hello there! {this.props.vData.name}</h1>
                    <dl className="dib">
                        <dd className="f6 f5-ns b">Email</dd>
                        <dd className="f3 f2-ns b">{this.props.vData.email}</dd>
                    </dl>
                    <br />
                    <dl className="dib">
                        <dd className="f6 f5-ns b">Open Users</dd>
                        <dd className="f3 f2-ns b">{this.props.vData.current}</dd>
                    </dl>
                    <dl className="dib">
                        <dd className="f6 f5-ns b">Completed Users</dd>
                        <dd className="f3 f2-ns b">{this.props.vData.past}</dd>
                    </dl>
                    <br />
                    <dl className="dib">
                        <dd className="f6 f5-ns b">Users</dd>
                        <br />
                        <table className="f6 w-100 mw8 center b--white bg-white" cellSpacing="0">
                        <thead className="lh-copy">
                            <tr className="stripe-light">
                            <th className="fw6 tl pa3 black">ID</th>
                            <th className="fw6 tl pa3 black">Responses</th>
                            </tr>
                        </thead>
                        {
                        (this.props.vData.users == null) ? console.log("true") :
                            (<tbody className="lh-copy">
                                {
                                    this.props.vData.users.map((user, i) => {
                                        return (
                                            <tr className="stripe-dark" key={i}>
                                                <td className="pa3 black">{user.id}</td>
                                                <td className="pa3 black">{JSON.stringify(user.responses)}</td>
                                                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100" type="submit" value="Chat" onClick={() => this.props.chatWithUser(user.id)} />
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>)
                        }
                        </table>
                    </dl>
                    <br />
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill"
                    type="submit"
                    value="Sign out"
                    onClick={() => this.props.onRouteChange('signout')}/>
                </article>
            </div>
            </main>
    </div>
        )
    }
}

export default VolunteerProfile;