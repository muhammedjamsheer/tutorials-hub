import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link, useLocation } from "react-router-dom";



function Angularcomponetcammunication() {
    const location = useLocation();
    const pagename = location.pathname.split("/").slice(-1)[0];

    const router_param_routing =
        `const routes: Routes = [
    { path: 'list/:id', component: AppListComponent }
];`;
    const router_param_routingbutton =
        `<button type="button" [routerLink]="['/list', id]">Show List</button>`;
    const router_param_routingservice =
        `id = 28;

constructor (private router: Router) {}

route() {
  this.router.navigate(['/list', this.id]);
}`;
    const Reading_Router_Params =
        `constructor(
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.params.subscribe(data => {
      console.log(data);
    })
  }`;
    const query_params_routing =
        `const routes: Routes = [
    { path: 'list', component: AppListComponent }
];`;
    const query_params_routingbutton =
        `<button type="button"   [routerLink]="['/list']"  [queryParams]="{id: '24'}">Show List</button>`;


    const query_params_routingservice =
        `id = 28;

constructor (private router: Router) {}

route() {
  this.router.navigate(['/list'], {queryParams: {id: this.id}});
}`;
    const Reading_Query_Params =
        `constructor(
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.queryParams.subscribe(data => {
      console.log(data);
    })
}`;
    const servicedatapass_userhtml =
        `<ul>
    <li *ngFor="let user of users">
        <a (click)="getuserdetails(user)"> {{user.name}}</a>
    </li>
</ul>
`;
    const servicedatapass_userts =
        `import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = [
    { id: 1, name: "jamsheer", gender: "male", age: 30, married: true },
    { id: 1, name: "thafseer", gender: "male", age: 25, married: false },
  ]
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  getuserdetails(user: any) {
    this.userService.emitData(user);
    this.router.navigate(['/userdetails']);
  }
}
`;
    const servicedatapass_userservice = `
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userdata =  new BehaviorSubject<string>('');;
  currentUserDetails = this.userdata.asObservable();

  constructor() { }

  emitData(data:any) {
    this.userdata.next(data)
  }
}
`
    const servicedatapass_userdetailhtml = `{{userdata | json}}`;
    const servicedatapass_userdetailts =
        `import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service'
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userdata: any;
  constructor(
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.userService.currentUserDetails.subscribe(msg => this.userdata = msg);
  }
}
`;
    const input_datapass_parenthtml =
        `<p>Parent Component</p>

<input [(ngModel)]="title" class="form-control Report-1" type="text">
<app-child-component [componentTitle]="title" ></app-child-component>
`;
    const input_datapass_parentts =
        `import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  title: string;
  constructor() { }
  ngOnInit() {
  }
}
`;


    const input_datapass_childhtml =
        `<p>child-component:</p>

<p>Data: {{componentTitle}}</p>
`;
    const input_datapass_childts =
        `import { Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
    @Input() componentTitle: string;
    constructor() { }
    ngOnInit() {
    }
}
`;
    const output_eventemitter_childhtml =
        ` <button (click)="sendMessage()">Send Message</button>`;
    const output_eventemitter_childts =
        `import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
    @Output() messageEvent = new EventEmitter<string>();
    message: string = "Hey Angular!"

    constructor() { }
    ngOnInit() {}

    sendMessage() {
        this.messageEvent.emit(this.message)
    }
}
`;
    const output_eventemitter_parenthtml =
        `     Message: {{message}}
<app-child (messageEvent)="receiveMessage($event)"></app-child>`;
    const output_eventemitter_parentts =
        `import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent-component.component.html',
    styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
    message:string;

    receiveMessage($event) {  
        this.message = $event  
    }
}
`;


const viewchild_childts =
`import { Component} from '@angular/core';

@Component({
selector: 'app-child-component',
templateUrl: './child-component.component.html',
styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
    message = 'Hello Angular!
}

`;
const viewchild_parenthtml =
`Message: {{ message }}
<app-child></app-child>`;
const viewchild_parentts =
`import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
selector: 'app-parent-component',
templateUrl: './parent-component.component.html',
styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
    @ViewChild(ChildComponent) child;
    constructor() { }
  
    Message:string;
  
    ngAfterViewInit() {
      this.message = this.child.message
    }
}
`;
    return (
        <>
            {pagename === "angularcomponetcammunication" &&
                <div>

                    {/* https://www.c-sharpcorner.com/article/sharing-the-data-between-components-in-angular/
https://www.dotnettricks.com/learn/angular/sharing-data-between-angular-components-methods */}
                    <h3>Component Communication in Angular</h3>
                    <dl>
                        <dt>Angular provides various ways to share the data between component </dt>
                        <dd> <Link to="inputdatapass" >Using @Input decorator (Parent to Child)</Link></dd>
                        <dd> <Link to="outputdatapass" >Using @Output decorator and EventEmitter (Child to Parent)</Link></dd>
                        <dd> <Link to="viewchilddatapass" >Using @ViewChild decorator (Child to Parent)</Link></dd>
                        <dd><Link to="servicedatapass" >Using a Service (Unrelated Components)</Link></dd>
                        <dd><Link to="urldatapass" >Passing Data from URLs</Link></dd>


                    </dl>
                </div>
            }
            {pagename === "urldatapass" &&
                <div>
                    <h3>Passing Data from URLs</h3>

                    <div>There are two ways to pass the data through URLs in Angular:</div>
                    <ol>
                        <li>Router Parameters</li>
                        <li>Query Params</li>
                    </ol>
                    <p>If the parameter is mandatory for the component then we have to use router parameter. Otherwise, we can use query params.</p>

                    <h5>Using Router Parameters</h5>
                    <p>Router parameters are required parameters. We have to register the parameter with the URL in the router module like this:</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{router_param_routing}</SyntaxHighlighter>
                    <b>Passing Router Param Through routerLink Directive</b>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{router_param_routingbutton}</SyntaxHighlighter>

                    <b>Passing Router Param Through route Service</b>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{router_param_routingservice}</SyntaxHighlighter>
                    <b>Reading Router Params</b>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{Reading_Router_Params}</SyntaxHighlighter>


                    <h5>Using Query Parameters</h5>
                    <p>Query params are optional params. There is no need to register a separate URL for the query params</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{query_params_routing}</SyntaxHighlighter>
                    <b>Passing Query Param Through routerLink Directive</b>
                    <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{query_params_routingbutton}</SyntaxHighlighter>
                    <b>Passing Query Param Through route Service</b>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{query_params_routingservice}</SyntaxHighlighter>
                    <b>Reading Query Params</b>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{Reading_Query_Params}</SyntaxHighlighter>
                </div>
            }
            {pagename === "servicedatapass" &&
                <div>
                    <h3>Passing Data Through a Service Using Observables</h3>
                    <p>If two components are siblings or the level of a component in the hierarchy is more distant, then it’s good to use a service for passing the data using observables.</p>
                    <p>Here user data is passing from user component to user details component</p>
                    <div className='row codeediter'>
                        <div className="col">
                            user.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{servicedatapass_userhtml}</SyntaxHighlighter>
                        </div>
                        <div className="col">
                            user.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{servicedatapass_userts}</SyntaxHighlighter>
                        </div>
                    </div>
                    user.service.ts
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{servicedatapass_userservice}</SyntaxHighlighter>
                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            userdetails.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{servicedatapass_userdetailhtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            userdetails.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{servicedatapass_userdetailts}</SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            }
            {pagename === "inputdatapass" &&
                <div>
                    <h3>Using @Input decorator (Parent to Child)</h3>

                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            parent.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{input_datapass_parenthtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            parent.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{input_datapass_parentts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            child.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{input_datapass_childhtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            child.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{input_datapass_childts}</SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            }
            {pagename === "outputdatapass" &&
                <div>
                    <h3>Using @Output decorator and EventEmitter (Child to Parent)</h3>

                    <p>Another way to share data is to emit data from the child component which can be listed by the parent component.</p>
                    <p>This approach is ideal when you want to share data changes that occur on things like button clicks, form entries, and other user events.</p>
                    <p>In the parent, we create a function to receive the message and set it equal to the message variable.</p>
                    <p>In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter.</p>
                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            child.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{output_eventemitter_childhtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            child.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{output_eventemitter_childts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            parent.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{output_eventemitter_parenthtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            parent.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{output_eventemitter_parentts}</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
            }
             {pagename === "viewchilddatapass" &&
                <div>
                    <h3>sharing data via ViewChild and AfterViewInit (Child to Parent)</h3>

                    <p>ViewChild allows a child component to be injected into a parent component.</p>
                    <p>It will give the parent access to its attributes and functions.</p>
                    <p>Here we need to implement the AfterViewInit lifecycle hook to receive the data from the child.</p>

                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            child.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{viewchild_childts}</SyntaxHighlighter>
                        </div>
                    </div>

                    <div className='row codeediter'>
                        <div className="col-lg-12">
                            parent.component.html
                            <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{viewchild_parenthtml}</SyntaxHighlighter>
                        </div>
                        <div className="col-lg-12">
                            parent.component.ts
                            <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{viewchild_parentts}</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}

export default Angularcomponetcammunication