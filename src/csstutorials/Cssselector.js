import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation } from "react-router-dom";


function Cssselector() {
  const location = useLocation();
  const pagename = location.pathname.split("/").slice(-1)[0];

  const css_element_selector = `
    h1 {
      color: red;
      text-align: center;
    } 
    `;

  const css_id_selector = `
    #para1 {
      text-align: center;
      color: red;
    } 
    `;

  const css_class_selector = `
    .center {
      text-align: center;
      color: red;
    }
  
    /*HTML elements can also refer to more than one class.*/
    <p class="center large">This paragraph refers to two classes.</p>
  
    .center {
      text-align: center;
      color: red;
    }
  
    .large {
      text-align: center;
      color: red;
    }
    `;

  const css_universal_selector = `
    * {
      text-align: center;
      color: red;
    } 
    `;

  const css_grouping_selector = `
    h1, h2, p {
      text-align: center;
      color: red;
    }
    `;

  const css_decentant_selector = `
    div p {
      background-color: yellow;
    }
  
    .header .subheader {
      color: yellow;
    }
    `;

  const css_child_selector = `
    div > p {
      background-color: yellow;
    }
    `;

  const css_sibiling_selector = `
    div + p {
      background-color: yellow;
    }
    `;
  const css_selector_pseudoclass_link = `
  /* unvisited link */
  a:link {
    color: #FF0000;
  }
  
  /* visited link */
  a:visited {
    color: #00FF00;
  }
  
  /* mouse over link */
  a:hover {
    color: #FF00FF;
  }
  
  /* selected link */
  a:active {
    color: #0000FF;
  }
    `;
  const css_selector_pseudoclass_firstchild = `
    p:first-child {
      color: blue;
    }
    `;
  const css_selector_pseudoelement = `
    p::first-letter {
      color: #ff0000;
      font-size: xx-large;
    }
    
    p::first-line {
      color: #0000ff;
      font-variant: small-caps;
    }

    h1::before {
      content: url(smiley.gif);
    }
    
    h1::after {
      content: url(smiley.gif);
    }
    `;

  return (
    <>
      {pagename === "selector" &&

        <div>
          <h4>CSS Selectors</h4>
          <p>CSS selectors are used to "find" (or select) the HTML elements you want to style..</p>


          <h5>1. Element Selector</h5>
          <p>The element selector selects HTML elements based on the element name.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_element_selector}
          </SyntaxHighlighter>

          <h5>2. Id Selector</h5>
          <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_id_selector}
          </SyntaxHighlighter>

          <h5>3. Class Selector</h5>
          <p>The class selector selects HTML elements with a specific class attribute.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_class_selector}
          </SyntaxHighlighter>

          <h5>4. Universal Selector</h5>
          <p>The universal selector (*) selects all HTML elements on the page.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_universal_selector}
          </SyntaxHighlighter>

          <h5>5. Grouping Selector</h5>
          <p>The grouping selector selects all the HTML elements with the same style definitions.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_grouping_selector}
          </SyntaxHighlighter>



        </div>
      }
      {pagename === "combinators" &&

        <div>
          <h4>CSS Selectors</h4>
          <p>Select elements based on a specific relationship between them</p>
          <p>There are four different combinators in CSS:</p>
          <h5>1. Descendant  Selector</h5>
          <p>The descendant selector matches all elements that are descendants of a specified element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_decentant_selector}
          </SyntaxHighlighter>


          <h5>2. Child Selector</h5>
          <p>The child selector selects all elements that are the children of a specified element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_child_selector}
          </SyntaxHighlighter>

          <h5>3. Adjacent Sibling Selector</h5>
          <p>The adjacent sibling selector is used to select an element that is directly after another specific element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_sibiling_selector}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "pseudoclass" &&



        <div>
          <h4>Pseudo-classes</h4>
          <p>A pseudo-class is used to define a special state of an element.</p>
          For example, it can be used to:
          <ul>
            <li>Style an element when a user mouses over it</li>
            <li>Style visited and unvisited links differently</li>
            <li>Style an element when it gets focus</li>
          </ul>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_selector_pseudoclass_link}
          </SyntaxHighlighter>
          <h4>The :first-child Pseudo-class</h4>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_selector_pseudoclass_firstchild}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "pseudoelement" &&

        <div>
          <h4>Pseudo-Elements</h4>
          <p>A CSS pseudo-element is used to style specified parts of an element.</p>

          For example, it can be used to:
          <ul>
            <li>Style the first letter, or line, of an element</li>
            <li>Insert content before, or after, the content of an element</li>
          </ul>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_selector_pseudoelement}
          </SyntaxHighlighter>


        </div>

      }
    </>
  )
}

export default Cssselector