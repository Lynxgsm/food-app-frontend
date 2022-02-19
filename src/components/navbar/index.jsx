import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-12 shadow-md'>
        <h1>Food App</h1>
        <nav>
            <NavLink className='mx-5 py-4' to="/">Home</NavLink>
            <NavLink className='mx-5 py-4' to="/dishes">Dishes</NavLink>
            <NavLink className='mx-5 py-4' to="/about">About</NavLink> 
        </nav>
    </div>
  )
}

export default Navbar;