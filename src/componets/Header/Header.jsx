import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="contaner">
                    <nav className="nav">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contacts'}>Contacts</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header