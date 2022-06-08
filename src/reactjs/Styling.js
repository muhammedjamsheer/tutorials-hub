import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Styling() {
    const classname = `
    import React from 'react';

    function User() {
        const userclass = "userprofile-active";
        const showbutton = false;
        return (
            <>
                <span className="menu navigation-menu">Menu</span>
    
                <span className={userclass}>User profile</span>
    
                <div className={"btn btn-primary " + (showbutton ? 'show' : 'hidden')}>Submit</div>
            </>
        )
    }
    export default User
    `;

    const styleclass = `
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
    `;



    return (
        <><h4>Styling and CSS</h4>
            <div>
                <h6 className='subheader'>Using className attribute</h6>
                <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                    {classname}
                </SyntaxHighlighter>
            </div>
            <div>
                <h6 className='subheader'>Using style attribute</h6>
                <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                    {styleclass}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default Styling   