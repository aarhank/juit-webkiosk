import React from 'react'
import './Header.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {
    const history = useHistory();
    function logout(){
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div>
            <div className='header-container'>
                <Link to='/moreinfo' style={{ textDecoration: 'none' }}>
                <p className='dashboard-text'>Moreinfo</p>
                </Link>
                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                <p className='dashboard-text'>Dashboard</p>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                <p className='dashboard-text' onClick={logout}>Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
