import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className='nav-wrapper blue darken-1' style={{padding: '0 2rem'}}>
                <a href='/' className='brand-logo'>
                    MERN
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <NavLink to='/create'>create</NavLink>
                    </li>
                    <li>
                        <NavLink to='/links'>links</NavLink>
                    </li>
                    <li>
                        <a href='/' onClick={logoutHandler}>exit</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
