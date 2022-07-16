import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

function Angularhomepage() {

    const menus = [
        {id: 1, label: "Data Binding", path: "/angular/databinding", children: [ ]},
        {id: 2, label: "Pipes", path: "/angular/pipes", children: [ ]},
        {id: 2, label: "Component Cammunication", path: "/angular/angularcomponetcammunication", children: [ ]},

        
    ]
    return (
        <div>
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <div className='left-content'>
                        <ul>
                            {menus.map((menu, i) => (
                                < div key={i}>
                                    <li ><NavLink to={menu.path}>{menu.label}</NavLink></li>
                                    <span>
                                        {menu.children.length > 0 && (
                                            <ul className="childclass">
                                                {menu.children.map((child, c) => (
                                                    <div key={c}>
                                                        <li><NavLink to={child.path}>{child.label}</NavLink></li>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                    </span>
                                </div>
                            ))}
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

export default Angularhomepage