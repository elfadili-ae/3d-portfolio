import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to="/"
                className="w-10 h-10 rounded shadow-md bg-white flex items-center justify-center text-purple-700">
                <p className=''>AH</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-purple-700' : 'text-black'}>About</NavLink>
            </nav>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-purple-700' : 'text-black'}>Projects</NavLink>
            </nav>
        </header>
    )
}

export default Navbar