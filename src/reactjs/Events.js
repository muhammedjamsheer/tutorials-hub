import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Events() {
    const codeString = `

    import React from "react";
    import uniquePropHOC from "./lib/unique-prop-hoc";
    
    
    
    class Expire extends React.Component {
        constructor(props) {
            super(props);
            this.state = { component: props.children }
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    component: null
                });
            }, this.props.time || this.props.seconds * 1000);
        }
        render() {
            return this.state.component;
        }
    }
    
    export default uniquePropHOC(["time", "seconds"])(Expire);
    
    
    `;
    return (
        <div>
            <h4>Events</h4>
            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {codeString}
            </SyntaxHighlighter>

            <p>We’ll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.</p>
        </div>
    )
}

export default Events