import React from 'react';

function User() {
    const employee_class = { color: "red", fontSize: "25px", border: "1px solid black" }
    const isActive = true;
    return (
        <>
            <span style={{ color: "red" }}>Menu</span>

            <span style={{ color: "red", backgroundColor: "green", fontSize: "25px" }}>User</span>

            <span style={employee_class}>Employee</span>

            <span style={{ background: isActive ? 'green' : 'red' }}>Employee</span>

            <div  style={ isActive ? { textAlign:'center', paddingTop: '20%'} : {}}>Customer</div>

        </>
    )
}
export default User