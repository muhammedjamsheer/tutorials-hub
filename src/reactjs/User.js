import React from 'react';
import { useNavigate } from "react-router-dom";

function User() {
    const navigate = useNavigate();


    const users = [
        { id: 1, name: "jamsheer", gender: 'male' },
        { id: 2, name: "thafseer", gender: 'male' },
        { id: 3, name: "Ishwa", gender: 'female' },
        { id: 4, name: "zaiba", gender: 'female' },
        { id: 5, name: "Haniya", gender: 'female' }
    ]

    return (
        <>
            <ul>{
                users.map(user => (
                    <li key={user.id} onClick={() => { navigate('/userdata',{state:{data:user}}) }}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
export default User