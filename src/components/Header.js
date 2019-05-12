import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className='nav-header'>
            <div className='container'>
                <h1>Expensify</h1>
                <ul className='menu-top-right'>
                    <li><NavLink to='/' activeClassName="is-active" exact>Home</NavLink></li>
                    <li><NavLink to='/dashboard' activeClassName="is-active" exact>Dashboard</NavLink></li>
                    <li><NavLink to='/create' activeClassName="is-active">Create</NavLink></li>
                    <li><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
                </ul>
            </div>
            <div className='container float-rigth'>
                <button className='btn-save' onClick={a => alert('abd')}>
                    <span className='btnText'>Login</span>
                </button>
            </div>
        </nav>
    </header>
)

export default Header