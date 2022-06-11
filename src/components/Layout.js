import React from 'react'
import Header from '../components/Header';
import { Outlet, NavLink } from "react-router-dom";
function Layout() {
    return (
        <>
            <Header />
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <div className='left-content'>
                        <ul>
                            <li><NavLink to="/test">Test</NavLink></li>
                            <li><NavLink to="/basics">Basics</NavLink></li>
                            <li><NavLink to="/styling">Styling</NavLink></li>
                            <li><NavLink to="/events">Events</NavLink></li>
                            <li><NavLink to="/routing">Routing</NavLink></li>
                            <li><NavLink to="/usestatehooks">Use State Hook</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='flex-item-right'>
                    <div className='right-content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout