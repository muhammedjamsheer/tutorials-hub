import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Basics() {
  const reactinstall = `
    npx create-react-app my-app
    cd my-app
    npm start
    `;
  return (
    <div>
      <h4>Create React App</h4>
      <SyntaxHighlighter className="codesyntax" language="bash" style={vscDarkPlus}>
        {reactinstall}
      </SyntaxHighlighter>
      <div className='seperater'></div>

      <h4>Install React Roter Dom</h4>
      <SyntaxHighlighter className="codesyntax" language="bash" style={vscDarkPlus}>
        npm install react-router-dom
      </SyntaxHighlighter>

    </div>
  )
}

export default Basics