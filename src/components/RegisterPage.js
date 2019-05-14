import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const RegisterPage = (props) => {

    const handleFormSubmit = () => {
        
    }

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleFormSubmit}>
                    <span>Nome</span>
                    <input type='text' name="name"></input>
                    <span>Sobrenome</span>
                    <input type='password' name="lastname"></input>
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

export default RegisterPage