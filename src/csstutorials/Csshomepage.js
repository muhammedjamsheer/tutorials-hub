import React from 'react'
import { NavLink ,Outlet} from "react-router-dom";
function Csshomepage() {
  return (
    <div>
    <div className='flex-container'>
            <div className='flex-item-left'>
                <div className='left-content'>
                    <ul>
                        <li><NavLink to="/css/basics">Css Basics</NavLink></li>
                        <li><NavLink to="/css/selector">Css Selector</NavLink></li>
                        <li><NavLink to="/css/colors">Css Colors</NavLink></li>
                        <li><NavLink to="/css/backgrounds">Css Backgrounds</NavLink></li>
                        <li><NavLink to="/css/borders">Css Borders</NavLink></li>
                        <li><NavLink to="/css/margins">Css Margins</NavLink></li>
                        <li><NavLink to="/css/padding">Css Padding</NavLink></li>
                        
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

export default Csshomepage