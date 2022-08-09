import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className="pa5 black-80 tc pv4 avenir">
            <h1 className="mt2 mb0 baskerville b fw1 f1 white">TEENAGE CONCERNS</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked white">A platform for you to freely share your concerns.</h2>
            <nav className="bt bb tc mw7 center mt4 white">
                <a href="#" className="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l hover-black" onClick={() => this.props.onRouteChange('uRegister')}>Anonymous User</a>
                <a href="#" className="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l hover-black" onClick={() => this.props.onRouteChange('vLogin')}>Volunteer Login</a>
                <a href="#" className="f6 f5-l link bg-animate white-80 hover-bg-lightest-blue dib pa3 ph4-l hover-black" onClick={() => this.props.onRouteChange('vRegister')}>Volunteer Register</a>
            </nav>
            </header>
        )
    }
}

export default Home;