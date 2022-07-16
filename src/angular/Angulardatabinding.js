import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { Link, useLocation } from "react-router-dom";
function Angulardatabinding() {
  const location = useLocation();
  const pagename = location.pathname.split("/").slice(-1)[0];

  const interpolation_synatx = `
  {{ templateExpression }}
  `;
  const interpolation_example_string_html = `

  <h6>{{title}}</h6>

  <p>{{first_name}} - {{last_name}}</p>

  `;
  const interpolation_example_string_ts = `
  export class AppComponent {
    title:string = 'angular-app';
    first_name:string="Muhammed";
    last_name:string="Athif";
  }  
  `;

  const interpolation_example_invokemethod_html = `

  <h6>{{getTitle()}}</h6>

  <p>Largest: {{max(100, 200)}}</p>

  `;
  const interpolation_example_invokemethod_ts = `
  export class AppComponent {
    title:string = 'angular-app';
    first_name:string="Muhammed";
    last_name:string="Athif";

    getTitle(): string {
      return this.title;
    }
    max(first: number, second: number): number {
      return Math.max(first, second);
    }
  }  
  `;


  const interpolation_example_elementproperty_html = `
   Bind to an image source 
  <div><img src="{{itemImageUrl}}"></div>

  href 
  <a href="/product/{{productID}}">{{productName}}</a>
  `;
  const interpolation_example_elementproperty_ts = `
  export class AppComponent {
    itemImageUrl:string="img_girl.jpg";
    productID:number=1;
    productName:string="Mobile"
  }  
  `;

  const interpolation_example_pipes_html = `
  <p>uppercase pipe: {{title | uppercase}}</p>
  <p>json pipe: {{items | json}}</p>
 `;
  const interpolation_example_pipes_ts = `
 export class AppComponent {
  title:string = 'angular-app';
  items :string[]=['Mobile','TV','Laptop'];
 }  
 `;

  const interpolation_navigationoperator_html = `
 <h3>{{user?.firstname}}</h3>

`;
  const interpolation_navigationoperator_ts = `
export class AppComponent {
  user: any = { firstname: "Jamsheer" ,lastname:"Muhammed"};
}  
`;
  const interpolation_templateref_html = `
<label>Enter Your Name</label>
<input (keyup)="0" #name>
<p>Welcome {{name.value}} </p>
`;
  const propertybinding_syntax = `[binding-target] = "binding-source"`;

  const propertybinding_eg_html =
    ` <h1 [innerText]="title"></h1>
 <p [innerHTML]="text1"></p>
 <button [disabled]="isDisabled">I am disabled</button>
`;

  const propertybinding_eg_ts =
    ` export class AppComponent {
  title="Angular Property Binding Example"
  isDisabled= true;
  text1="The <b>Angular</b> is printed in bold"
  }
`;
  const propertybinding_classname_html =
    ` <div [className]="cssStringVar">Test</div>
 <div [className]="getClass()">getClass</div>
 <div [className]="hasError() ? 'red' : 'size20'"> conditonal operator </div>
`;

  const propertybinding_classname_ts =
    ` export class AppComponent {
  cssStringVar: string= 'red size20';

  getClass() {
   return 'red';
  }
}
`;
  const propertybinding_style_html =
    ` 
syntax
[style.style-property] = "style-value"

<p [style.color]="'red'">Give me red</p>
<button [style.color]="status=='error' ? 'red': 'blue'">Button 1</button> 
<button [style.color]="getColor()">Button 2</button> 
`;

  const propertybinding_style_ts =
    ` export class AppComponent {

  getClass() {
  return 'red';
  }
}
`;
  const eventbinding_example_html = `
  <button (click)="clickMe()">Click Me</button>

`;
  const eventbinding_example_ts = `
  export class AppComponent {
  clickCount=0
    clickMe() {
      this.clickCount++;
    }
  }
`;

  const eventbinding_multipleevent_example_html = `
<button (click)="clickMe();showmodal()">Click Me</button>

`;
  const eventbinding_multipleevent_example_ts = `
export class AppComponent {
clickCount:number=0
displaymodal:boolean=false;
  clickMe() {
    this.clickCount++;
  }
  showmodal() {
    this.displaymodal=true;
  }
}
`;
  const eventbinding_eventpayload_example_html = `
<input (input)="handleInput($event)">
<p>You have entered {{value}}</p>

`;
  const eventbinding_eventpayload_example_ts = `
export class AppComponent {
  value=""
  handleInput(event) {
    this.value = (event.target as HTMLInputElement).value;
  }
`;
  const eventbinding_Templatereference_example_html = `
<input #el (input)="handleInput1(el)">
<p>You have entered {{val}}</p>

`;
  const eventbinding_Templatereference_example_ts = `
  export class AppComponent {
  val="";
  handleInput1(element) {
    this.val=element.value;
  }
}
`;
const eventbindingsyntax = `(target-event)="TemplateStatement"`;
  const twoway_databinding_html =
    `<input type="text" name="value" [(ngModel)]="value">
<p> You entered {{value}}</p>

`;
  const twoway_databinding_ts =
    `export class AppComponent {
 value="";
 clearValue() {
   this.value="";
 }
}
`;
const twoway_databinding_syntax =`[(ngModel)] = "[property of your component]" `;



  return (
    <>
      {pagename === "databinding" &&
        <div>
          <h3>   Data Binding in Angular</h3>
          <p>The data binding in Angular can be broadly classified into two groups. One way binding or two-way binding</p>


          <h5>One way binding</h5>
          <p>In one way binding data flows from one direction. Either from view to component or from component to view.</p>


          <dl>
            <dt>Examples of One way binding are</dt>
            <dd>- <Link to="interpolation" >Interpolation</Link></dd>
            <dd>- <Link to="propertybinding" >Property Binding</Link></dd>
            <dd>- <Link to="eventbinding" > Event Binding</Link></dd>
          </dl>


          <h5>Two Way binding</h5>
          <p>The two-way binding has a feature to update data from component to view and vice-versa.</p>
          <p>In two way data binding, property binding and event binding are combined together.</p>
          <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{twoway_databinding_syntax}</SyntaxHighlighter>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{twoway_databinding_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{twoway_databinding_ts}</SyntaxHighlighter>
            </div>
          </div>
        </div>
      }
      {pagename === "interpolation" &&
        <div>
          <h3>Interpolation</h3>
          <p>In interpolation data flows from component to view.</p>
          <p>Interpolation uses double culy braces for data binding.</p>
          <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_synatx}</SyntaxHighlighter>
          <h5> Examples of interpolation</h5>
          <h6>1.Pass string</h6>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_example_string_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{interpolation_example_string_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h6>2.Invoke a method in the component</h6>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_example_invokemethod_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{interpolation_example_invokemethod_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h6>3.Bind to an element property</h6>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_example_elementproperty_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{interpolation_example_elementproperty_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h6>4.Use Pipes</h6>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_example_pipes_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{interpolation_example_pipes_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h6>5.The safe navigation operator ( ? )</h6>
          <p>You can make use of a safe navigation operator ( ? ) to guards against null and undefined values</p>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_navigationoperator_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{interpolation_navigationoperator_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h6>6.Use a template reference variable</h6>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{interpolation_templateref_html}</SyntaxHighlighter>
            </div>
            <div className="col"></div>
          </div>
        </div>
      }
      {pagename === "propertybinding" &&
        <div>
          <h3>Property binding</h3>
          <p>In Property binding data flows from component to a property of an html element.</p>
          <p>Whenever the value of the component changes, the Angular updates the element property in the View. You can set the properties such as class, href, src, textContent, etc using property binding</p>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {propertybinding_syntax}
          </SyntaxHighlighter>

          <h4>Property Binding Example</h4>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{propertybinding_eg_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{propertybinding_eg_ts}</SyntaxHighlighter>
            </div>
          </div>
          <h5>ClassName Property binding</h5>

          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{propertybinding_classname_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{propertybinding_classname_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h5>Style Property binding</h5>

          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{propertybinding_style_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{propertybinding_style_ts}</SyntaxHighlighter>
            </div>
          </div>
        </div>
      }
      {pagename === "eventbinding" &&
        <div>
          <h3>Event binding</h3>
          <p>In Event binding data flows from view to component when a dom event occurs.</p>
          <h6>Syntax</h6>
          <SyntaxHighlighter className="codesyntax" language="css" style={vscDarkPlus}>
            {eventbindingsyntax}
          </SyntaxHighlighter>



          <h5>Example of Event binding</h5>

          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{eventbinding_example_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{eventbinding_example_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h5>Multiple event handlers</h5>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{eventbinding_multipleevent_example_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{eventbinding_multipleevent_example_ts}</SyntaxHighlighter>
            </div>
          </div>


          <h5>$event Payload</h5>
          <p>DOM Events carries the event payload. I.e the information about the event. We can access the event payload by using $event as an argument to the handler function.</p>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{eventbinding_eventpayload_example_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{eventbinding_eventpayload_example_ts}</SyntaxHighlighter>
            </div>
          </div>

          <h5>Template reference variable</h5>
          <p>We can also make use of the template reference variable to pass the value instead of $event.</p>
          <div className='row codeediter'>
            <div className="col">
              app.component.html
              <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{eventbinding_Templatereference_example_html}</SyntaxHighlighter>
            </div>
            <div className="col">
              app.component.ts
              <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{eventbinding_Templatereference_example_ts}</SyntaxHighlighter>
            </div>
          </div>



        </div>



      }
    </>
  )
}

export default Angulardatabinding