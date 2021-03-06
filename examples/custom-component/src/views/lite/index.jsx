import React from 'react'

export class LoginForm extends React.Component {
  state = {
    username: null,
    password: null
  }

  //Your login logic would go here
  login = async () => {
    alert(`This would be sent to the configured endpoint: ${this.props.endpoint}`)

    /*
    if (this.state.username && this.state.password) {
      const result = await this.props.bp.axios.post('/mywebsite/login', { username, password })
    }
    */
  }

  sendCustomEvent = () => {
    //This will act as if the user typed 'bla bla' and pressed enter.
    this.props.onSendData({ type: 'text', text: 'bla bla' })

    //You can send any type of (valid) event using the above method.
  }

  render() {
    return (
      <div>
        Please login
        <br />
        Username: <input type="username" />
        <br />
        Password: <input type="password" />
        <button onClick={this.login}>Login</button>
        <br />
        <br />
        <button onClick={this.sendCustomEvent}>Send Custom Event</button>
      </div>
    )
  }
}

export class InjectedBelow extends React.Component {
  render() {
    // Return null if you just want to interact with the chat.
    return null

    // Or you can add special content
    return (
      <div style={{ align: 'center' }}>
        <small>Injected below chat</small>
      </div>
    )
  }
}

export class UpperCasedText extends React.Component {
  render() {
    return <div>{this.props.text && this.props.text.toUpperCase()}</div>
  }
}

// This component is an example on how to replace the composer input of the web chat (text input)
export class Composer extends React.Component {
  render() {
    /**
     * We are re-using styling and the original input component. You can use part of existing props or replace all of them.
     * Check out the code of 'channel-web' on the link below to see how the this.props methods are handled.
     * https://github.com/botpress/botpress/blob/master/modules/channel-web/src/views/web/side/index.jsx
     */
    const { style, Input } = this.props.original

    return (
      <div className={style.composer}>
        <div className={style['flex-column']}>
          <Input
            placeholder={'Reply to some bot name (or this.props.name)'}
            send={this.props.onTextSend}
            change={this.props.onTextChanged}
            text={this.props.text}
            recallHistory={this.props.recallHistory}
            config={this.props.config}
          />
        </div>
      </div>
    )
  }
}
