import React from 'react'
import ButtonPrimary from './ButtonPrimary'

export default class LoginPage extends React.Component {
    
    constructor() {
        super()
        this.state = {
            userLogin: '',
            userPassword: ''
        }
    }

    handleFormSubmit(event) {
        event.preventDefault()
        console.log('Disparou')
        console.log(process.env.BACKEND_HOST)
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.handleFormSubmit}>
                        <span>Login</span>
                        <input type='text' name="login"></input>
                        <span>Senha</span>
                        <input type='password' name="password"></input>
                        <ButtonPrimary buttonClassName='btn-save' spanClassName='btn-text' text='Login' type='submit' />
                    </form>
                </div>
            </div>
        )
    }
}