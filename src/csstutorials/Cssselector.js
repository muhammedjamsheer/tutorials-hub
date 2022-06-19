import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';



function Cssselector() {
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

    return (
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


            <h5>6. Descendant  Selector</h5>
            <p>The descendant selector matches all elements that are descendants of a specified element.</p>
            <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
                {css_decentant_selector}
            </SyntaxHighlighter>


            <h5>7. Child Selector</h5>
            <p>The child selector selects all elements that are the children of a specified element.</p>
            <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
                {css_child_selector}
            </SyntaxHighlighter>

            <h5>8. Adjacent Sibling Selector</h5>
            <p>The adjacent sibling selector is used to select an element that is directly after another specific element.</p>
            <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
                {css_sibiling_selector}
            </SyntaxHighlighter>
        </div>
    )
}

export default Cssselector