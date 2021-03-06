import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
function Csshomepage() {


    const menus = [
        { id: 1, label: "Css Basics", path: "/css/basics", children: [] },
        {
            id: 2, label: "Css Selector", path: "/css/selector", children: [
                { id: 1, label: "Simple Selector", path: "/css/selector" },
                { id: 2, label: "Combinater Selector", path: "/css/combinators" },
                { id: 2, label: "Pseudo-class Selector", path: "/css/pseudoclass" },
                { id: 2, label: "Pseudo-elements Selector ", path: "/css/pseudoelement" },
            ]
        },
        { id: 3, label: "Css Colors", path: "/css/colors", children: [] },
        { id: 4, label: "Css Backgrounds", path: "/css/backgrounds", children: [] },
        { id: 5, label: "Css Borders", path: "/css/borders", children: [] },
        { id: 6, label: "Css Margins", path: "/css/margins", children: [] },
        { id: 7, label: "Css Padding", path: "/css/padding", children: [] },
        { id: 8, label: "Css Height / Width", path: "/css/heightorwidth", children: [] },
        { id: 9, label: "Css Outline", path: "/css/outline", children: [] },
        { id: 10, label: "Css Text", path: "/css/text", children: [] },
        { id: 11, label: "Css Fonts", path: "/css/fonts", children: [] },
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

export default Csshomepage