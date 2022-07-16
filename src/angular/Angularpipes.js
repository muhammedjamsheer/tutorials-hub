import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link, useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table'
function Angularpipes() {
    const location = useLocation();
    const pagename = location.pathname.split("/").slice(-1)[0];
    const pipe_syntax = `Expression | pipeOperator[:pipeArguments] `;
    const pipes_example_html = `
<p> Title : {{title | upperCase }} </p>
<p> Formatted date : {{toDate | date}} </p>

`;
    const pipes_example_ts =
        `export class AppComponent {
 title: string = 'pipe Example' ; 
 toDate: Date = new Date(); 
}  
`;
    const pipes_passingarg_html = `<p>{{toDate | date:'medium'}} </p>`;
    const pipes_chaning_html = `<p>{{toDate | date | uppercase}} </p> `;
    const datepipe_eg_html = `
    <p>Unformatted date : {{toDate }} </p> 
    <!--output  Fri Jul 01 2022 10:54:13 GMT+0530 (India Standard Time) -->   
    <p>Formatted date : {{toDate | date}} </p> 
    <!--output  Jul 1, 2022 --> 
 `;
    const datepipe_eg_ts = `
    export class AppComponent {
     toDate: Date = new Date(); 
    } 
 `;
    const datepipe_egparam_html =
        ` <!--predefined -->
 <p> {{toDate | date | 'medium'}} </p> 
 <!--output May 24, 2020, 3:42:17 PM-->  

 <!--custom-->
 <p> {{toDate | date:'dd/MM/y'}}  </p>
   <!--output 24/05/2020-->
`;
    const datepipe_egparam_ts = `
 export class AppComponent {
  toDate: Date = new Date(); 
 } 
`;
    const datepipe_custom = `
 {{ toDate | date :'hh:mm:ss' }}  09:44:12

 {{ toDate | date :'dd-MMM-yyyy' }}  07-Nov-2016

 {{ toDate | date :'h:mm' }}  9:44

 {{ toDate | date :'dd:MMM:yyyy hh-mm-ss z'}}  07:Nov:2016 09-44-12 India Standard Time

 {{ toDate | date :'hh:mm, E'}}  09:44, Mon
`;
    const slicepipe_array_html =
        `{{array | slice: 2:5}}  <!--output [15,20,25,30]-->
{{array | slice: 6}}    <!--output [35,40,45,50]-->
{{array | slice: -3}}   <!--output [40,45,50]-->
`;
    const slicepipe_array_ts =
        `export class AppComponent {
   array:number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
 } 
`;

    const date_pipe_syntax = `{{ date_Value | date [ : format [ : timeZone [ : locale ] ] ] }} `;

    const uppercase_pipe = `{{ value_expression | uppercase }} `;
    const lowercase_pipe = `{{ value_expression | lowercase }} `;
    const titlecase_pipe = `{{ value_expression | titlecase }} `;
    const slicepipe_syntax = `{{ array_or_string_expression | slice:start[:end] }} `;


    const slicepipe_string_html =
        `{{str | slice: 4:6}} <!--output c p-->
{{str | slice: 6}}    <!--output pipe example-->
{{str | slice: -3}}   <!--output ple-->
{{arr | slice: 3:-3}} <!--output ce pipe examp-->
`;
    const slicepipe_string_ts =
        `export class AppComponent {
 var str="slice pipe example";
} 
`;

    const currencypipe_html =
        `{{ price | currency }} <!--   $10,050.45   -->
`;
    const currencypipe_ts =
        `export class AppComponent {
  price: number = 10050.4521;
} 
`;
    const currencypipe_currencycode_html =
        `<p>{{price | currency:'USD'}} </p>   <!--   $10,050.45   -->
<p>{{price | currency:'EUR'}} </p>    <!--   €10,050.45   -->
<p>{{price | currency:'INR'}} </p>    <!--   ₹10,050.45   -->
<p>{{price | currency:'JPY'}} </p>    <!--   ¥10,050      -->
<p>{{price | currency:'AFN'}} </p>    <!--   AFN10,050    -->
`;
    const currencypipe_currencydisplay_html = `
<!--  1. code  --> 
<p>{{price | currency:'USD':'code'}}</p>  <!--   USD10,050.45   -->
<p>{{price | currency:'EUR':'code'}}</p>  <!--   EUR10,050.45   -->
<p>{{price | currency:'INR':'code'}}</p>  <!--   INR10,050.45   -->

<!--  2. symbol  --> 
<p>{{price | currency:'USD':'symbol'}}</p>  <!--   $10,050.45   -->
<p>{{price | currency:'EUR':'symbol'}}</p>  <!--   €10,050.45   -->
<p>{{price | currency:'INR':'symbol'}}</p>  <!--   ₹10,050.45   -->

<!--  2. string  --> 
<p>{{price | currency:'USD':'American dollar '}} </p>   <!--   American dollar 10,050.45   -->
<p>{{price | currency:'EUR':'Euro '}} </p>              <!--   Euro 10,050.45   -->
<p>{{price | currency:'INR':'Indian Rupee '}} </p>      <!--   Indian Rupee 10,050.45   -->
`;
    const currencypipe_withdecimal =
        `<p>{{price | currency:'USD':'symbol':'5.1-1'}}</p>     <!--   $10,050.5   -->
<p>{{price | currency:'USD':'symbol':'4.2-2'}}</p>     <!--   $10,050.45  -->
<p>{{price | currency:'USD':'symbol':'3.3-3'}}</p>     <!--  $10,050.452   -->
`;
    const decimalpipe_html =
        `<p> Unformatted :{{num}}</p>                     <!--   9542.14554   -->
<p> Formatted :{{num | number}}</p>              <!--   9,542.146   -->
<p> Formatted :{{num | number:'3.1-2'}}</p>      <!--   9,542.15   -->
<p> Formatted :{{num | number:'7.1-5'}} </p>     <!--   0,009,542.14554   -->

<div>{{value | number:'2.1-4'}}</div>        <!--   35.8796   -->
<div>{{value1 | number:'2.1-4'}}</div>       <!--   05.1231   -->
<div>{{value2 | number:'2.1-4'}}</div>       <!--   05.8   -->
`;
    const decimalpipe_ts =
        `export class AppComponent {
    num: number= 9542.14554;
    value: number = 35.879612312;
    value1: number = 5.1231345;
    value2: number = 5.8;
} 
`;
    const custompipe_capitalise_html =
        `<h2>{{name | capitalize}}</h2>
`;
    const custompipe_capitalise_ts =
        `export class AppComponent {
    name: string = "muhammed jamsheer"
} 
`;
    const custompipe_capitalise =
        `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }

}
`;

const custompipe_square_html =
`<h2>{{price | square}}</h2>
`;
const custompipe_square_ts =
`export class AppComponent {
    price: number = 5;
} 
`;
const custompipe_square =
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
`;



const custompipe_parameter_html =
`<ul>
    <li *ngFor="let user of users">
        {{user.name | username :user.gender : user.age}}
    </li>
</ul>
`;
const custompipe_parameter_ts =
`export class AppComponent {
    users: any[] = [
        { id: 1, name: "jamsheer", gender: "male", age: 30, married: true },
        { id: 1, name: "thafseer", gender: "male", age: 25, married: false },
        { id: 1, name: "Nafida", gender: "female", age: 20, married: false },
        { id: 1, name: "Jasmin", gender: "female", age: 23, married: true, },
      ]
} 
`;
const custompipe_parameter =
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(name: string, gender: string,age:number): unknown {
    let ext = "Mr "
    if (gender === "female") {ext = "Mrs "}
    return ext + name +" -"+age +"years old";
  }

}
`;



    const decimalpipe_syntax = `number_expression | number:'minIntegerDigits.minFractionDigits-maxFractionDigits' `;
    return (
        <>
            {pagename === "pipes" &&
                <div>
                    <h3> Pipes in Angular</h3>
                    <p>Angular Pipes takes data as input and formats or transform the data to display in the template</p>
                    <h5>Angular Pipes Syntax</h5>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{pipe_syntax}</SyntaxHighlighter>

                    <div>Expression: is the expression, which you want to transform</div>
                    <div> | : is the Pipe Character  </div>
                    <div>pipeOperator : name of the Pipe  </div>
                    <div>pipeArguments: arguments to the Pipe  </div>
                    <br></br>
                    <h5>  Pipes Example</h5>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{pipes_example_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{pipes_example_ts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <h5>  Passing arguments to pipes</h5>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{pipes_passingarg_html}</SyntaxHighlighter>
                    <h5> Chaining Pipes</h5>
                    <p>Pipes can be chained together to make use of multiple pipes in one expression. </p>
                    <p>For example in the following code, the toDate is passed to the Date Pipe. The output of the Date pipe is then passed to the uppercase pipe.</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{pipes_chaning_html}</SyntaxHighlighter>
                    <h3>The Angular Built-in pipes</h3>
                    <dl>
                        <dt>Some of the important pipes are</dt>
                        <dd>1. <Link to="datepipe" >Date Pipe</Link></dd>
                        <dd>2. <Link to="casepipe" > Case Pipe </Link></dd>
                        <dd>3. <Link to="slicepipe" >Slice Pipe</Link></dd>
                        <dd>4. <Link to="currencypipe" >Currency Pipe</Link></dd>
                        <dd>5. <Link to="decimalpipe" >Decimal Pipe</Link></dd>
                    </dl>


                    <h3>Angular Custom Pipes </h3>

                    <h5>Example 1 - capitalize text using custom pipe</h5>
                    <p>Run the following command on the terminal:</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>ng g pipe capitalize</SyntaxHighlighter>


                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{custompipe_capitalise_html}</SyntaxHighlighter>
                        {/* </div>
                        <div className="col"> */}
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_capitalise_ts}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            capitalize.pipe.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_capitalise}</SyntaxHighlighter>
                        </div>
                    </div>



                    
                    <h5>Example 2 - get square value using custom pipe</h5>
                    <p>Run the following command on the terminal:</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>ng g pipe square</SyntaxHighlighter>

                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{custompipe_square_html}</SyntaxHighlighter>
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_square_ts}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            square.pipe.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_square}</SyntaxHighlighter>
                        </div>
                    </div>


                                
                    <h5>Example 3 - Passing parameter</h5>
                    <p>Run the following command on the terminal:</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>ng g pipe parameter</SyntaxHighlighter>

                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{custompipe_parameter_html}</SyntaxHighlighter>
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_parameter_ts}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            parameter.pipe.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{custompipe_parameter}</SyntaxHighlighter>
                        </div>
                    </div>



                </div>





            }

            {pagename === "datepipe" &&
                <div>
                    <h3> Date pipe</h3>
                    <p>DatePipe provides different date formats that can be predefined date formats as well as custom date formats</p>

                    <dl>
                        <dt>Mainly, three parameters are considered when designing an angular date pipe.</dt>
                        <dd>- Format</dd>
                        <dd>- Time zone</dd>
                        <dd>- Locale</dd>
                    </dl>
                    <div style={{ width: "800px" }}>
                        <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{date_pipe_syntax}</SyntaxHighlighter>
                    </div>
                    <h5> Date pipe Example</h5>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{datepipe_eg_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{datepipe_eg_ts}</SyntaxHighlighter>
                        </div>
                    </div>


                    <h5> Date pipe with parameters Example</h5>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{datepipe_egparam_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{datepipe_egparam_ts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <h3>Pre defined Date Format</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Format</th>
                                <th>Equivalent Custom Format</th>
                                <th>Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>short</td>
                                <td>	'M/d/yy, h:mm a'</td>
                                <td>5/24/20, 3:40 PM</td>
                            </tr>
                            <tr>
                                <td>medium</td>
                                <td>'MMM d, y, h:mm:ss a'</td>
                                <td>May 24, 2020, 3:42:17 PM</td>
                            </tr>
                            <tr>
                                <td>long</td>
                                <td>'MMMM d, y, h:mm:ss a z'</td>
                                <td>May 24, 2020 at 3:42:17 PM GMT+5</td>
                            </tr>
                            <tr>
                                <td>full</td>
                                <td>'EEEE, MMMM d, y, h:mm:ss a zzzz'</td>
                                <td>Sunday, May 24, 2020 at 3:42:17 PM GMT+05:30</td>
                            </tr>
                            <tr>
                                <td>shortDate</td>
                                <td>'M/d/yy'</td>
                                <td>5/24/20</td>
                            </tr>
                            <tr>
                                <td>mediumDate</td>
                                <td>'MMM d, y'</td>
                                <td>May 24, 2020</td>
                            </tr>
                            <tr>
                                <td>longDate</td>
                                <td>'MMMM d, y'</td>
                                <td>May 24, 2020</td>
                            </tr>
                            <tr>
                                <td>fullDate</td>
                                <td>'EEEE, MMMM d, y'</td>
                                <td>Sunday, May 24, 2020</td>
                            </tr>


                            <tr>
                                <td>shortTime</td>
                                <td>'h:mm a'</td>
                                <td>3:42 PM</td>
                            </tr>
                            <tr>
                                <td>mediumTime</td>
                                <td>'h:mm:ss a'</td>
                                <td>3:42:17 PM</td>
                            </tr>
                            <tr>
                                <td>longTime</td>
                                <td>'h:mm:ss a z'</td>
                                <td>3:42:17 PM GMT+5</td>
                            </tr>
                            <tr>
                                <td>fullTime</td>
                                <td>'h:mm:ss a zzzz'</td>
                                <td>3:42:17 PM GMT+05:30</td>
                            </tr>
                        </tbody>
                    </Table>

                    <h3>Custom Date Format</h3>
                    <p>symbols used in custom date formats.</p>
                    <ul>
                        <li className='customdateformat'>y represents year.</li>
                        <li className='customdateformat'>M represents month.</li>
                        <li className='customdateformat'>d represents day.</li>
                        <li className='customdateformat'>E represents week day.</li>
                        <li className='customdateformat'>h represents hour(12).</li>
                        <li className='customdateformat'>H represents hour(24).</li>
                        <li className='customdateformat'>m represents minute.</li>
                        <li className='customdateformat'>s represents seconds.</li>
                        <li className='customdateformat'>z represents timezone.</li>
                    </ul>

                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{datepipe_custom}</SyntaxHighlighter>
                    <Table striped bordered hover>
                        <thead>
                            <tr class="row-1 odd">
                                <th class="column-1">Component</th>
                                <th class="column-2">format</th>
                                <th class="column-3">Example</th>
                            </tr>
                        </thead>
                        <tbody class="row-hover">
                            <tr class="row-2 even">
                                <td class="column-1">Year</td>
                                <td class="column-2">y</td>
                                <td class="column-3">2016</td>
                            </tr>
                            <tr class="row-3 odd">
                                <td class="column-1">Year</td>
                                <td class="column-2">yy</td>
                                <td class="column-3">16</td>
                            </tr>
                            <tr class="row-4 even">
                                <td class="column-1">Month</td>
                                <td class="column-2">M</td>
                                <td class="column-3">9</td>
                            </tr>
                            <tr class="row-5 odd">
                                <td class="column-1">Month</td>
                                <td class="column-2">M</td>
                                <td class="column-3">99</td>
                            </tr>
                            <tr class="row-6 even">
                                <td class="column-1">Month</td>
                                <td class="column-2">MMM</td>
                                <td class="column-3">Nov</td>
                            </tr>
                            <tr class="row-7 odd">
                                <td class="column-1">Month</td>
                                <td class="column-2">MMMM</td>
                                <td class="column-3">November</td>
                            </tr>
                            <tr class="row-8 even">
                                <td class="column-1">Day</td>
                                <td class="column-2">d</td>
                                <td class="column-3">9</td>
                            </tr>
                            <tr class="row-9 odd">
                                <td class="column-1">Day</td>
                                <td class="column-2">dd</td>
                                <td class="column-3">09</td>
                            </tr>
                            <tr class="row-10 even">
                                <td class="column-1">hour</td>
                                <td class="column-2">j</td>
                                <td class="column-3">9</td>
                            </tr>
                            <tr class="row-11 odd">
                                <td class="column-1">hour</td>
                                <td class="column-2">jj</td>
                                <td class="column-3">09</td>
                            </tr>
                            <tr class="row-12 even">
                                <td class="column-1">hour</td>
                                <td class="column-2">h</td>
                                <td class="column-3">9 AM</td>
                            </tr>
                            <tr class="row-13 odd">
                                <td class="column-1">hour</td>
                                <td class="column-2">hh</td>
                                <td class="column-3">09 AM</td>
                            </tr>
                            <tr class="row-14 even">
                                <td class="column-1">hour24</td>
                                <td class="column-2">H</td>
                                <td class="column-3">13</td>
                            </tr>
                            <tr class="row-15 odd">
                                <td class="column-1">hour24</td>
                                <td class="column-2">HH</td>
                                <td class="column-3">13</td>
                            </tr>
                            <tr class="row-16 even">
                                <td class="column-1">minute</td>
                                <td class="column-2">m</td>
                                <td class="column-3">9</td>
                            </tr>
                            <tr class="row-17 odd">
                                <td class="column-1">minute</td>
                                <td class="column-2">mm</td>
                                <td class="column-3">09</td>
                            </tr>
                            <tr class="row-18 even">
                                <td class="column-1">second</td>
                                <td class="column-2">s</td>
                                <td class="column-3">9</td>
                            </tr>
                            <tr class="row-19 odd">
                                <td class="column-1">second</td>
                                <td class="column-2">ss</td>
                                <td class="column-3">99</td>
                            </tr>
                            <tr class="row-20 even">
                                <td class="column-1">Time zone</td>
                                <td class="column-2">z</td>
                                <td class="column-3">Pacific Standard time</td>
                            </tr>
                            <tr class="row-21 odd">
                                <td class="column-1">Time zone</td>
                                <td class="column-2">Z</td>
                                <td class="column-3">GMT-8:00</td>
                            </tr>
                            <tr class="row-22 even">
                                <td class="column-1">Time zone</td>
                                <td class="column-2">a</td>
                                <td class="column-3">PM</td>
                            </tr>
                            <tr class="row-23 odd">
                                <td class="column-1">era</td>
                                <td class="column-2">G</td>
                                <td class="column-3">AD</td>
                            </tr>
                            <tr class="row-24 even">
                                <td class="column-1">era</td>
                                <td class="column-2">GGGG</td>
                                <td class="column-3">Anno Domini</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            }
            {pagename === "casepipe" &&
                <div>
                    <h3> Upper case pipe</h3>
                    <p>Uppercase pipe is  used to convert string or text to uppercase in Angular component templates.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{uppercase_pipe}</SyntaxHighlighter>

                    <h3> Lower case pipe</h3>
                    <p>Lower case pipe is  used to convert string or text to lowercase in Angular component templates.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{lowercase_pipe}</SyntaxHighlighter>

                    <h3>Title case pipe</h3>
                    <p>Title case pipe is  used to convert string or text to titlecase in Angular component templates.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{titlecase_pipe}</SyntaxHighlighter>
                </div>

            }
            {pagename === "slicepipe" &&
                <div>
                    <h3> Slice pipe</h3>
                    <p>This returns a slice of an array. The first argument is the start index of the slice and the second argument is the end index..</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{slicepipe_syntax}</SyntaxHighlighter>
                    <p>If the start or end index is negative then the index is counted from end of the string/array</p>


                    <h5>Array Expression Example</h5>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{slicepipe_array_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{slicepipe_array_ts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <h5>String Expression Example</h5>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{slicepipe_string_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{slicepipe_string_ts}</SyntaxHighlighter>
                        </div>
                    </div>


                </div>

            }
            {pagename === "currencypipe" &&
                <div>
                    <h3> Currency pipe</h3>
                    <p>Currency pipe transforms a number to a currency string</p>
                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{currencypipe_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{currencypipe_ts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <h5>Angular Currency Pipe with different currency Code</h5>

                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{currencypipe_currencycode_html}</SyntaxHighlighter>

                    <h5>Angular Currency Pipe with display</h5>


                    <dl>
                        <dt>display parameter can contain any one of the following:</dt>
                        <dd>1. code</dd>
                        <dd>2. symbol</dd>
                        <dd>3. symbol-narrow</dd>
                        <dd>4. string</dd>
                        <dd>5. boolean</dd>
                    </dl>

                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{currencypipe_currencydisplay_html}</SyntaxHighlighter>

                    <h5>Angular Currency Pipe with different decimal representation (digitsInfo)</h5>
                    <p>Angular currency pipe by default display two decimal places</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{currencypipe_withdecimal}</SyntaxHighlighter>

                </div>
            }

            {pagename === "decimalpipe" &&
                <div>
                    <h3> Decimal pipe</h3>
                    <p>The Decimal Pipe is used to Format a number as Text. This pipe will format the number according to locale rules.</p>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{decimalpipe_syntax}</SyntaxHighlighter>

                    <p>minIntegerDigits is the minimum number of integer digits to use. Defaults to 1.</p>

                    <p>minFractionDigits is the minimum number of digits after fraction. Defaults to 0.</p>

                    <p>maxFractionDigits is the maximum number of digits after fraction. Defaults to 3.</p>

                    <div className='row codeediter'>
                        <div className="col">
                            app.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{decimalpipe_html}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            app.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{decimalpipe_ts}</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
            }


        </>
    )
}

export default Angularpipes