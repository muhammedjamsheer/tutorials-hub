import React from 'react'
import { useLocation } from "react-router-dom";
function Usrdata() {
    const location = useLocation();
    const state = location.state || {};
    const user = state.data || {}
    console.log(user)
    return (
        <>
            <div className="page details">
                <div className="title">
                    Name : {user.name}
                </div>
                <div className="body">
                    Gender : {user.gender}
                </div>

            </div>
        </>
    )
}

export default Usrdata