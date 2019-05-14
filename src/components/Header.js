import React from 'react'
import { NavLink } from 'react-router-dom'

const loginStyle = {
    marginLeft: '0'
}

const Header = () => (
    <header>
        <nav className='nav-header'>
            <div className='container'>
                <h1>Expensify</h1>
                <ul className='menu-top-right'>
                    <li className='margin-1rem'><NavLink to='/' activeClassName="is-active" exact>Home</NavLink></li>
                    <li className='margin-1rem'><NavLink to='/dashboard' activeClassName="is-active" exact>Dashboard</NavLink></li>
                    <li className='margin-1rem'><NavLink to='/create' activeClassName="is-active">Create</NavLink></li>
                    <li className='margin-1rem'><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
                </ul>
            </div>
            <div style={loginStyle} className='container float-rigth'>
                <NavLink className='btn-save' to='/login' exact>
                    <span className='btn-text'>Login</span>
                </NavLink>
                <NavLink className='btn-save' to='/register' exact>
                    <span className='btn-text'>Registre-se</span>
                </NavLink>
            </div>
        </nav>
    </header>
)

export default Header