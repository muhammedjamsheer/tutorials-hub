import React from 'react'
import { NavLink ,Outlet} from "react-router-dom";
function Reacthome() {
  return (
    <div>
        <div className='flex-container'>
                <div className='flex-item-left'>
                    <div className='left-content'>
                        <ul>
                            <li><NavLink to="/reactjs/users">Users</NavLink></li>
                            <li><NavLink to="/reactjs/Basics">Basics</NavLink></li>
                            <li><NavLink to="/reactjs/styling">Styling</NavLink></li>
                            <li><NavLink to="/reactjs/events">Events</NavLink></li>
                            <li><NavLink to="/reactjs/routing">Routing</NavLink></li>
                            <li><NavLink to="/reactjs/hooks">Use State Hook</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='flex-item-right'>
                    <div className='right-content'>
                        <Outlet />
                    </div>
                </div>
            </div> 
    </div>
  )
}

export default Reacthome