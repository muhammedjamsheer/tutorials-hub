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
  const css_margin_auto = `
  div {
    width: 300px;
    margin: auto;
    border: 1px solid red;
  }
  `;
  const css_padding = `
  div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  `;
  const css_padding_shorthand = `
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

  const css_height_width = `
  div {
    height: 200px;
    width: 50%;
    background-color: powderblue;
  }
  `;
  const css_text_color = `
  h1 {
    color: green;
  }
  `;
  const css_text_align = `
  h1 {
    text-align: center;
  }
  h2 {
    text-align: left;
  }
  h3 {
    text-align: right;
  }
  h4 {
    text-align: justify;
  }
  `;
  const css_text_align_last = `
  p {
    text-align-last: right;
  }
  p {
    text-align-last: center;
  }
  p {
    text-align-last: justify;
  }
  `;
  const css_text_decoration_line = `
  h1 {
    text-decoration-line: overline;
  }
  h2 {
    text-decoration-line: line-through;
  }
  h3 {
    text-decoration-line: underline;
  }
  p {
    text-decoration-line: overline underline;
  }
  `;
  const css_text_decoration_color = `
  h1 {
    text-decoration-line: overline;
    text-decoration-color: red;
  }
  `;
  const css_text_decoration_style = `
  h1 {
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
  }

  h3 {
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
  `;
  const css_text_decoration_thickness = `
  p {
    text-decoration-line: underline;
    text-decoration-color: red;  
    text-decoration-style: double;
    text-decoration-thickness: 5px;  
  }
  `;
  const css_text_decoration_shorthand = `
  h1 {
    text-decoration: underline;
  }
  
  h2 {
    text-decoration: underline red;
  }
  
  h3 {
    text-decoration: underline red double;
  }
  
  p {
    text-decoration: underline red double 5px;
  }  
  `;
  const css_text_decoration_none = `
  a {
    text-decoration: none;
  }
  `;
  const css_text_transformation = `
  p {
    text-transform: uppercase;
  }
  
  p {
    text-transform: lowercase;
  }
  
  p {
    text-transform: capitalize;
  }
  `;
  const css_text_indent = `
  p {
    text-indent: 50px;
  }
  `;
  const css_text_letter_space = `
  h1 {
    letter-spacing: 5px;
  }
  `;
  const css_text_line_height = `
  p {
    line-height: 1.8;
  }
  `;
  const css_text_word_space = `
  p {
    word-spacing: 10px;
  }
  `;
  const css_text_white_space = `
  white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;

  p {
    white-space: nowrap;
  }
  
  p {
    white-space: normal;
  }
  
  p {
    white-space: pre;
  }
  `;
  const css_text_shadow = `
  h1 {
    text-shadow: 2px 2px;
  }
  h1 {
    text-shadow: 2px 2px red;
  }
  `;
  const css_font_family = `
  p {
    font-family: "Times New Roman", Times, serif;
  }
  `;
  const css_font_style = `
  p.normal {
    font-style: normal;
  }
  
  p.italic {
    font-style: italic;
  }
  
  p.oblique {
    font-style: oblique;
  }
  `;
  const css_font_weight = `
  p.normal {
    font-weight: normal;
  }
  
  p.thick {
    font-weight: bold;
  }
  `;
  const css_font_size = `
  h1 {
    font-size: 40px;
  }
  
  /*Responsive Font Size*/
  h1 {
    font-size: 10vw;
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
      {pagename === "heightorwidth" &&
        <div>
          <h4>CSS Height and Width</h4>
          <p>The height and width properties are used to set the height and width of an element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_height_width}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "outline" &&
        <div>
          <h4>CSS Outline</h4>
          <p>The height and width properties are used to set the height and width of an element.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_height_width}
          </SyntaxHighlighter>
        </div>
      }
      {pagename === "text" &&
        <div>
          <h4>CSS Text</h4>
          <p>CSS has a lot of properties for formatting text.</p>
          <h5>1.Text Color</h5>
          <p>The color property is used to set the color of the text. The color is specified by:</p>
          <ul>
            <li>a color name - like "red"</li>
            <li>a HEX value - like "#ff0000"</li>
            <li>an RGB value - like "rgb(255,0,0)"</li>
          </ul>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_color}
          </SyntaxHighlighter>
          <h5>2. Text Alignment</h5>
          <p>The text-align property is used to set the horizontal alignment of a text.</p>
          <p>A text can be left or right aligned, centered, or justified.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_align}
          </SyntaxHighlighter>

          <h5>3. Text Align Last</h5>
          <p>The text-align-last property specifies how to align the last line of a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_align_last}
          </SyntaxHighlighter>

          <h5>4. Text Decoration</h5>
          <p>The <span class="marktext">text-decoration-line</span> property is used to add a decoration line to text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_line}
          </SyntaxHighlighter>

          <p>The <span class="marktext">text-decoration-color</span>  property is used to set the color of the decoration line.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_color}
          </SyntaxHighlighter>

          <p>The <span class="marktext">text-decoration-style</span>  property is used to set the style of the decoration line.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_style}
          </SyntaxHighlighter>

          <p>The <span class="marktext">text-decoration-thickness</span>  property is used to set the thickness  of the decoration line.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_thickness}
          </SyntaxHighlighter>

          <h6>The Shorthand Property</h6>
          <ul>
            <li> text-decoration-line (required)</li>
            <li> text-decoration-color (optional)</li>
            <li>text-decoration-style (optional)</li>
            <li> text-decoration-thickness (optional)</li>
          </ul>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_shorthand}
          </SyntaxHighlighter>


          <p>The <span class="marktext">text-decoration: none </span>property is used to remove the underline from links</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_decoration_none}
          </SyntaxHighlighter>

          <h5>5.Text Transformation</h5>
          <p>The <span class="marktext">text-transform</span>   property is used to specify uppercase and lowercase letters in a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_transformation}
          </SyntaxHighlighter>

          <h5>6. Text Spacing</h5>
          <b>Text Indentation</b>
          <p>The <span class="marktext">text-indent</span> property is used to specify the indentation of the first line of a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_indent}
          </SyntaxHighlighter>


          <b>Letter Spacing</b>
          <p>The <span class="marktext">letter-spacing</span> property is used to specify the space between the characters in a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_letter_space}
          </SyntaxHighlighter>

          <b>Line Height</b>
          <p>The <span class="marktext">line-height</span> property is used to specify the space between lines.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_line_height}
          </SyntaxHighlighter>

          <b>Word Spacing</b>
          <p>The <span class="marktext">word-spacing</span> property is used to specify the space between the words in a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_word_space}
          </SyntaxHighlighter>

          
          <b>White Spacing</b>
          <p>The <span class="marktext">white-spacing</span> property specifies how white-space inside an element is handled.</p>
          
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_white_space}
          </SyntaxHighlighter>

          <b>Text Shadow</b>
          <p>The <span class="marktext">text-shadow</span> property adds shadow to text.</p>
          
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_text_shadow}
          </SyntaxHighlighter>

          

        </div>
      }
      {pagename === "fonts" &&
        <div>
          <h4>CSS Font</h4>
          <h5>Font Family</h5>
          <p>The <span class="marktext">font-family</span> property to specify the font of a text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_font_family}
          </SyntaxHighlighter>

          <h5>Font Style</h5>
          <p>The <span class="marktext">font-style</span> property is mostly used to specify italic text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_font_style}
          </SyntaxHighlighter>

          <h5>Font Weight</h5>
          <p>The <span class="marktext">font-weight</span>  property specifies the weight of a font.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_font_weight}
          </SyntaxHighlighter>

          <h5>Font Size</h5>
          <p>The <span class="marktext">font-size</span> property sets the size of the text.</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {css_font_size}
          </SyntaxHighlighter>
        </div>
      }





    </>
  )
}

export default Cssbasics