import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation } from "react-router-dom";

function Cssbasics() {
  const location = useLocation();
  const pagename = location.pathname.split("/").slice(-1)[0];
  const css_syntax = `
  selector{property:value}

  p {
    color: red;
    text-align: center;
  }
  `;
  const css_colors = `
  Hexadecimal Colors
  ------------------
  A hexadecimal color is specified with: #RRGGBB.All values must be between 00 and FF.
  #p1 {color: #ff0000;}   /* red */
  #p2 {color: #00ff00;}   /* green */
  #p3 {color: #0000ff;}   /* blue */

  Hexadecimal colors with transparency
  -----------------------------------
  A hexadecimal color is specified with: #RRGGBB. To add transparency, add two additional digits between 00 and FF.
  #p1a {color: #ff000080;}   /* red transparency */
  #p2a {color: #00ff0040;}   /* green transparency */
  #p3a {color: #0000ff10;}   /* blue transparency */

  RGB Colors
  ----------
  An RGB color value is specified with the rgb() function
  #p1 {background-color: rgb(255, 0, 0);}   /* red */
  #p2 {background-color: rgb(0, 255, 0);}   /* green */
  #p3 {background-color: rgb(0, 0, 255);}   /* blue */

  RGBA Colors
  -----------
  RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the object.
  #p1 {background-color: rgba(255, 0, 0, 0.3);}   /* red with opacity */
  #p2 {background-color: rgba(0, 255, 0, 0.3);}   /* green with opacity */
  #p3 {background-color: rgba(0, 0, 255, 0.3);}   /* blue with opacity */
  `;
  const css_predefined_colors = `
  #p1 {background-color: blue;}
  #p2 {background-color: red;}
  #p3 {background-color: coral;}
  #p4 {background-color: brown;}
  `;
  const css_current_colors = `
  #myDIV {
    color: blue; /* Blue text color */
    border: 10px solid currentcolor; /* Blue border color */
  }
  `;
  const css_background_colors = `
  body {
    background-color: lightblue;
  }

  /*The opacity property specifies the opacity/transparency of an element. 
  It can take a value from 0.0 - 1.0. The lower value, the more transparent:*/

  div {
    background-color: green;
    opacity: 0.3;
  }

  /*Transparency using RGBA*/

  div {
    background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
  }
  `;
  const css_background_image = `
  body {
    background-image: url("paper.gif");
  }

  By default, the background-image property repeats an image both horizontally and vertically.
  Showing the background image only once is also specified by the background-repeat property:

  body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
  }
  `;
  const css_background_position = `
  body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
  }

    /*Different background positions*/
    left top
    left center
    left bottom
    right top
    right center
    right bottom
    center top
    center center
    center bottom
  `;
  const css_background_attatchment = `
  body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
  }

  /*Specify that the background image should scroll with the rest of the page:*/
  body {
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: scroll;
  }
  `;
  const css_background_shorthand = `
  /*Instead of writing:*/
  body {
    background-color: #ffffff;
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
  }

  /*You can use the shorthand property background:*/
  body {
    background: #ffffff url("img_tree.png") no-repeat right top;
  }
  `;
  const css_border_style = `
  p {border-style: dotted}
  p {border-style: none}
  p {border-style: hidden}

  /*Specific Side Style*/
  p {border-top-style: dotted;}  /* dotted top  and other side border not displayed*/
  p {border-style: dotted solid} /* dotted top and bottom, solid on the sides */
  p {border-style: dotted dashed solid double}  /* dotted top, dashed right, solid bottom and double left */


  `;
  const css_border_width = `
  p {
    border-style: solid;
    border-width: 5px;
  }
  p {
    border-style: solid;
    border-width: medium;
  }

  /*Specific Side Widths*/
  p {
    border-style: solid; 
    border-top-width: 10px;  /* 10px top */ 
  }
  p {
    border-style: solid;
    border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
  }
  p {
    border-style: solid;
    border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
  }
  `;
  const css_border_color = `
  p {
    border-style: solid;
    border-color: red;
  }

  /*Specific Side Colors*/
  p {
    border-style: solid;
    border-right-color: green; /* green on right side*/
  }
  p {
    border-style: solid;
    border-color: red green; /* red top and bottom, green on the sides */
  }
  p {
    border-style: solid;
    border-color:  red green blue yellow ; /* red top, green right, blue bottom and yellow left */
  }
  `;
  const css_border_shorthand = `
  /*stntax */
  p {
    border: border-width  border-style (required) border-color;
  }
  /*example */
  p {
    border: 5px solid red;
  }
  /*You can also specify all the individual border properties for just one side:*/
  p {
    border-left: 6px solid red;
  }
  p {
    border-bottom: 6px solid red;
  }
  `;

  const css_border_rounded = `
  p {
    border: 2px solid red;
    border-radius: 5px;
  }
  `;
  const css_margin = `
  p {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
  }
  `;
  const css_margin_shorthand = `
  p {
    margin: 25px 50px 75px 100px; /* top margin is 25px , right margins is 50px ,bottom margin is 75px* ,left margin is 100px */
  }

  If the margin property has three values:
  p {
    margin: 25px 50px 75px; /* top margin is 25px , right and left margins are 50px ,bottom margin is 75px*/
  }

  If the margin property has two values:
  p {
    margin: 25px  50px; /* top and bottom margin is 25px , right and left margins are 50px*/
  }
  `;
  const css_margin_auto= `
  div {
    width: 300px;
    margin: auto;
    border: 1px solid red;
  }
  `;
  const css_padding= `
  div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  `;
  const css_padding_shorthand= `
  p {
    padding: 25px 50px 75px 100px; /* top padding is 25px , right padding is 50px ,bottom padding is 75px* ,left padding is 100px */
  }

  If the padding property has three values:
  p {
    padding: 25px 50px 75px; /* top padding is 25px , right and left padding are 50px ,bottom padding is 75px*/
  }

  If the padding property has two values:
  p {
    padding: 25px  50px; /* top and bottom padding is 25px , right and left padding are 50px*/
  }
  `;
  return (
    <>
      {pagename === "basics" &&
        <div>
          <h4>CSS Syntax</h4>
          <p>A CSS rule consists of a selector and a declaration block.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_syntax}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "colors" &&
        <div>
          <h4>CSS Color</h4>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_colors}
          </SyntaxHighlighter>
          <h4>Predefined/Cross-browser Color Names</h4>
          <p>140 color names are predefined in the HTML and CSS color specification.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_predefined_colors}
          </SyntaxHighlighter>

          <h4>The currentcolor Keyword</h4>
          <p>The currentcolor keyword refers to the value of the color property of an element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_current_colors}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "backgrounds" &&
        <div>
          <p>The CSS background properties are used to add background effects for elements.</p>
          <h4>Background Color</h4>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_background_colors}
          </SyntaxHighlighter>
          <h4>Background Image</h4>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_background_image}
          </SyntaxHighlighter>

          <h4>Background Position</h4>
          <p>The background-position property is used to specify the position of the background image</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_background_position}
          </SyntaxHighlighter>

          <h4>Background Attachment</h4>
          <p>The background-attachment property specifies whether the background image should scroll or be fixed</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_background_attatchment}
          </SyntaxHighlighter>


          <h4>Background Shorthand</h4>
          <p>The background-attachment property specifies whether the background image should scroll or be fixed</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_background_shorthand}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "borders" &&
        <div>
          <h4>CSS Borders</h4>
          <p>The CSS border properties allow you to specify the style, width, and color of an element's border.</p>
          <h6>1.Border Style</h6>
          <p>The border-style property specifies what kind of border to display.</p>
          <ul>
            <li>dotted - Defines a dotted border</li>
            <li>dashed - Defines a dashed border</li>
            <li>solid  - Defines a solid  border</li>
            <li>double  - Defines a double  border</li>
            <li>none  -  Defines no border</li>
            <li>hidden  - Defines a hidden border</li>
          </ul>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_border_style}
          </SyntaxHighlighter>

          <h6>2.Border Width</h6>
          <p>The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:</p>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_border_width}
          </SyntaxHighlighter>

          <h6>3.Border Color</h6>
          <p>The border-color property is used to set the color of the four borders.</p>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_border_color}
          </SyntaxHighlighter>

          <h6>4.Border Shorthand Property</h6>
          <p>To shorten the code, it is also possible to specify all the individual border properties in one property.</p>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_border_shorthand}
          </SyntaxHighlighter>

          <h6>5.Rounded Borders</h6>
          <p>The border-radius property is used to add rounded borders to an element.</p>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_border_rounded}
          </SyntaxHighlighter>

        </div>
      }
      {pagename === "margins" &&
        <div>
          <h4>CSS Margins</h4>
          <p>Margins are used to create space around elements, outside of any defined borders.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_margin}
          </SyntaxHighlighter>
          <h5>Margin Shorthand</h5>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_margin_shorthand}
          </SyntaxHighlighter>

          <h5>The auto Value</h5>
          <p>You can set the margin property to auto to horizontally center the element within its container.</p>

          <p>The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.</p>

          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_margin_auto}
          </SyntaxHighlighter>

        </div>
      }
       {pagename === "padding" &&
        <div>
          <h4>CSS Padding</h4>
          <p>The CSS padding properties are used to generate space around an element's content, inside of any defined borders.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_padding}
          </SyntaxHighlighter>

          <h5>Padding Shorthand</h5>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_padding_shorthand}
          </SyntaxHighlighter>
        </div>
      } 






    </>
  )
}

export default Cssbasics