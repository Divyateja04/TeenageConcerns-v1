import React from 'react';

import './Chat.css';

import io from 'socket.io-client';
const URL = "localhost:8080";
const socket = io(URL);

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            message: "",
            errorMessage: "",
            messageList: []
        }
    }

    onMessageChange = (e) => {
        this.setState({message: e.target.value});
    }

    componentDidMount() {
        socket.emit('joinRoom', { username: this.props.username, room: this.props.room });
        socket.on('message', (message) => {
            const newMessageList =  this.state.messageList;
            newMessageList.push(message);
            this.setState({messageList: newMessageList});

            const chatMessages = document.querySelector('.chat-messages');
            chatMessages.scrollTop = chatMessages.scrollHeight
        });
    }

    sendMessage = () => {
        if (!this.state.message) {
            this.setState({errorMessage: "Please enter a message"});
        }
        socket.emit('chatMessage', this.state.message);
        this.setState({message: ""});
    }

    render() {

        return (
            <div className="pa5">
                <main className="pa4 white-80 b--black bg-white br4 shadow-5 chat-window">
                    <div className="measure center">
                        <fieldset id="chat" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 black">Chat Window</legend>
                            <p className='red'>{this.state.errorMessage}</p>
                        </fieldset>

                        <div className="chat-messages">
                            {
                                this.state.messageList.map((message, i) => {
                                    return (
                                        <div className='message' key={i}>
                                            <p className="meta">
                                                {message.username}
                                                <span>{message.time}</span>
                                            </p>
                                            <p className='message-content'>
                                                {message.message}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                        <div class="cf">
                            <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns b--black-10" placeholder="Enter message" type="text" name="message" id="message" value={this.state.message} onChange={this.onMessageChange}/>
                            <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Send" onClick={this.sendMessage} />
                        </div>

                        <div className="lh-copy mt3">
                            <a href="#" className="f6 link dim black db pointer" onClick={() => this.props.isVolunteer ? this.props.onRouteChange('vProfile') : this.props.onRouteChange('uProfile')}>Go Back to Dashboard</a>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Chat;