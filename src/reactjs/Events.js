import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';



function Events() {

    const oClickevent = `
    import { Button } from 'react-bootstrap';
    
    function User() {
        const clickHandle = () => {
            alert("clicked")
        }
        function removeItem(id) {
            console.log(id)
        }
        function handleChange(evt) {
            console.log("new value", evt.target.value);
          }

        return (
            <>
                {/*onClick Event */}
                <Button variant="primary" onClick={clickHandle} >Click me</Button>

                {/*onClick Event with  arguments */}
                <Button variant="primary" onClick={() => removeItem('1')}>Click me</Button>

                {/* onChange Event */}
                <input type="text" onChange={handleChange}/>
            </>
        )
    }
    export default User
    `;


    return (
        <div>
            <h4>Events</h4>
            <p>React events are named in camelCase</p>
            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {oClickevent}
            </SyntaxHighlighter>
        </div>
    )
}

export default Events