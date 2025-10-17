import React from 'react';
import '../../App.css'
import './Header.css'
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/images/logo.png'
import githubImg from '../../assets/images/icon-github.png'

const Header = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
    </>;
    
    return (
        <header className='bg-base-100'>
            <div className="navbar max-w-[1440px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    
                    <Link to="/"><div className='flex items-center'><img src={logoImg} className='mr-2' alt="Footer Logo" width="40" height="40" /> <span>HERO.IO</span></div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/ibrahimtpi/" target="_blank"><button className="btn btn-purple text-white"><img src={githubImg} className='mr-2' alt="Footer Logo" width="40" height="40" /> Contribute</button></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;