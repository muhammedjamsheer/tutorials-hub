import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link, useLocation } from "react-router-dom";
function Angularforms() {
    const location = useLocation();
    const pagename = location.pathname.split("/").slice(-1)[0];
    const importReactiveFormsModule = `
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { ReactiveFormsModule } from '@angular/forms';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    `;

    const form_example_html = `
<div class="card">
    <div class="card-header">
        User Details
    </div>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="card-body">
            <div class="row mt-2">
                <label class="col-2"> Name:</label>
                <div class="col-4">
                    <input formControlName="name" placeholder="Your name" class="form-control"
                        [ngClass]="{ 'is-invalid': submitted && f['name'].errors }">
                    <div *ngIf="submitted && f['name'].errors" class="text-danger ">
                        <div *ngIf="f['name'].errors['required']">Name is required</div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <label class="col-2">Email:</label>
                <div class="col-4">
                    <input formControlName="email" placeholder="Your email" class="form-control"
                        [ngClass]="{ 'is-invalid': submitted && f['email'].errors }">
                    <div *ngIf="submitted && f['email'].errors" class="text-danger ">
                        <div *ngIf="f['email'].errors['required']">Email is required</div>
                        <div *ngIf="f['email'].errors['email']">Enter a valid email </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <label class="col-2">Mobile no:</label>
                <div class="col-4">
                    <input formControlName="mobile" placeholder="Your mobile no" class="form-control"
                        [ngClass]="{ 'is-invalid': submitted && f['mobile'].errors }">
                    <div *ngIf="submitted && f['mobile'].errors" class="text-danger ">
                        <div *ngIf="f['mobile'].errors['required']">Mobile no is required</div>
                        <div *ngIf="f['mobile'].errors['pattern']">Enter a valid mobile no </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <label class="col-2">Age:</label>
                <div class="col-4">
                    <input type="number" formControlName="age" placeholder="Your age" class="form-control"
                        [ngClass]="{ 'is-invalid': submitted && f['age'].errors }">
                    <div *ngIf="submitted && f['age'].errors" class="text-danger ">
                        <div *ngIf="f['age'].errors['required']">Age is required</div>
                        <div *ngIf="f['age'].errors['min']">Age must be graterthan 20 </div>
                        <div *ngIf="f['age'].errors['max']">Age must be lessthan 45 </div>

                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <label class="col-2">Message: </label>
                <div class="col-4">
                    <input formControlName="message" placeholder="Your message" class="form-control"
                        [ngClass]="{ 'is-invalid': submitted && f['message'].errors }">
                    <div *ngIf="submitted && f['message'].errors" class="text-danger ">
                        <div *ngIf="f['message'].errors['required']">Message is required</div>
                        <div *ngIf="f['message'].errors['minlength']">Message must be graterthan 15 characters </div>
                        <div *ngIf="f['message'].errors['maxlength']">Message must be lessthan 25 characters </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="reset" class="btn btn-danger" (click)="resetUserForm()">Clear</button>&nbsp;
            <button type="submit" class="btn btn-primary">Send</button>
        </div>
    </form>
</div>
    `;

    const form_example_ts = `
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(45)]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(25)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return
    }
    console.log(JSON.stringify(this.userForm.value, null, 2));
  }
  
  resetUserForm() {
    this.userForm.reset();
  }
}
`
    const setvalueExample = `
 ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(45)]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(25)]],
      address: this.fb.group({
        street: [''],
        city: [''],
      })
    });
  }

  /* for setting complete form control */
  setValue() {
    let userdata = {
      name: "Jamsheer",
      email: "jamsheer@gmail.com",
      mobile: 8592947647,
      age: 25,
      message: "44",
      address:{
        city:"Cochin",
        street:"Palarivattom"
      }
    }
    this.userForm.setValue(userdata)
  }

  /* for setting a single form control */
  setName() {
    this.userForm.get('name')?.setValue('Mahesh');
  }

  /* for setting a single form group */
  setAddress() {
    let address = {
      street: "Palarivattom",
      city: "Cochin"
    }
    this.userForm.get('address')?.setValue(address);
  }
`
    const patchvalueExample = `
ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(45)]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(25)]],
      address: this.fb.group({
        street: [''],
        city: [''],
      })
    });
  }

  patchValue() {
    this.userForm.patchValue({
      email: "sachin@gmail.com",
      address: {
        street: "Maharatsra",
      }
    })
  }`
    const findingthevalue = `
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
  `
    const valuechanges = `
  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe(x => {
      console.log(x);
    })
    this.reactiveForm.get("address").valueChanges.subscribe(x => {
      console.log(x);
    })
  }
  `
    const addControl =
        `addControl() {
    this.reactiveForm.addControl("middleName", new FormControl('', [Validators.required]));
}`
    const removeControl =
        `removeControl() {
    this.reactiveForm.removeControl("middleName");
}`
    const setControl =
        `setControl() {
  this.reactiveForm.setControl("middleName", new FormControl('lastName', [Validators.required]);
}`
    const contains =
        `containsControl() {
    console.log(this.reactiveForm.contains("middleName"));
}`
    const builtinvalidater =
        `
this.userForm = this.fb.group({
    /* Required Validator */
    firstname: ['', Validators.required],
    /* Minlength Validator */
    middlename: ['',[Validators.required,Validators.minLength(10)]],
    /* Maxlength Validator */
    lastname: ['',[Validators.required,Validators.Maxlength(10)]],
    /* Pattern Validator */
    mobile: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    /* Email Validator */
    email: ['', [Validators.required,Validators.email]],

    /* Min Validator for numeric values*/
    age: ['',[Validators.required,Validators.min(15)]],
    /* Max Validator for numeric values*/
    age: ['',[Validators.required,Validators.max(15)]],
  });
`
    const dynamicvalidations =
        `
ngOnInit() {
    this.userForm = this.fb.group({
      name: [''],
    });
  }
  setValidator() {
    this.userForm.get("name").setValidators([Validators.required]);
    this.userForm.get("name").updateValueAndValidity();
  }
  clearValidation() {
    this.userForm.get("name").clearValidators();
    this.userForm.get("name").updateValueAndValidity();
 }
`
    const agerangeCustomvalidater_service =
        `import { AbstractControl } from '@angular/forms';
export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== '' && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { ageRange: true };
    }
    return null;
}
`
const agerangeCustomvalidater_ts =
`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,FormControl } from '@angular/forms';
import { ageRangeValidator } from 'src/app/_services/age.validator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required,ageRangeValidator]],
    });
  }
}
`
const agerangeCustomvalidater_html =
`<label class="col-2"> Age:</label>
<div class="col-4">
    <input type="text" formControlName="age" placeholder="Your age" class="form-control"
        [ngClass]="{ 'is-invalid': submitted && f['age'].errors }">
    <div *ngIf="submitted && f['age'].errors" class="text-danger ">
        <div *ngIf="f['age'].errors['required']">age is required</div>
        <div *ngIf="f['age'].errors['ageRange']">age should be between 18 to 45</div>
    </div>
</div>
`
const agerangeCustomvalidater_passparam_service=`
function ageRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange': true };
        }
        return null;
    };
}`
const agerangeCustomvalidater_passparam_ts=`
min = 10;
max = 20;
ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
        age: new FormControl(null, [ageRangeValidator(this.min, this.max)])
    });
}`
    return (
        <>
            <h3>Angular Reactive Forms</h3>


            <p>Reactive forms are forms where we define the structure of the form in the component class.</p><p> i.e. we create the form model with Form Groups, Form Controls, and FormArrays. We also define the validation rules in the component class. Then, we bind it to the HTML form in the template.</p>
            <p>This is different from the template-driven forms, where we define the logic and controls in the HTML template.</p>

            <dl>
                <dd> <Link to="reactiveformexample" >Reactive Forms Example</Link></dd>
                <dd> <Link to="setvaluepatchvalue" >SetValue & PatchValue in Reactive Forms</Link></dd>
                <dd> <Link to="valuechanges" >Finding the value and valuechanges</Link></dd>
                <dd> <Link to="dynamicform" >Adding Controls Dynamically to Form</Link></dd>
                <dd> <Link to="validations" >Validations In Reactive Form</Link></dd>
            </dl>
            {pagename === "validations" &&
                <div>
                    <h3>Built-in Validators </h3>
                    <p>The Angular has provided several built-in validators</p>

                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{builtinvalidater}</SyntaxHighlighter>
                    <h3>Dynamic Validations </h3>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{dynamicvalidations}</SyntaxHighlighter>
                    <h3>Custom Validations </h3>
                    <p><b> The custom validator returns either of the following:</b></p>
                    <p>1. If the validation fails, it returns an object, which contains a key-value pair. Key is the name of the error and the value is always Booleantrue..</p>
                    <p>2. If the validation does not fail, it returns null.</p>
                    create a file with name age.validator.ts and paste
                    <div class="codeediterstatndard" >
                        src\app\_services\age.validator.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{agerangeCustomvalidater_service}</SyntaxHighlighter>
                        employee.component.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{agerangeCustomvalidater_ts}</SyntaxHighlighter>
                        employee.component.html
                        <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{agerangeCustomvalidater_html}</SyntaxHighlighter>
                    </div>
                    <h3>Passing Parameters to a Custom Validator</h3>
                    <div class="codeediterstatndard" >
                        src\app\_services\age.validator.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{agerangeCustomvalidater_passparam_service}</SyntaxHighlighter>
                        employee.component.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{agerangeCustomvalidater_passparam_ts}</SyntaxHighlighter>
                      
                    </div>
                </div>

            }
            {pagename === "dynamicform" &&
                <div>
                    <h3>Adding Controls Dynamically to Form</h3>
                    <h5>addControl()</h5>
                    <p>Adds a control to the FormGroup and also updates validity & validation status. If the control already exists, then ignores it</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{addControl}</SyntaxHighlighter>

                    <h5>removeControl() </h5>
                    <p>This method will remove the control with the provided name from the FormGroup.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{removeControl}</SyntaxHighlighter>

                    <h5>setControl() </h5>
                    <p>Replaces the control with the provided name with the new control.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{setControl}</SyntaxHighlighter>

                    <h5>contains() </h5>
                    <p>Check whether the control with the provided name exists or not.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{contains}</SyntaxHighlighter>
                </div>

            }
            {pagename === "valuechanges" &&
                <div>
                    <h3>Finding the Value</h3>
                    <p>The value returns the object with a key-value pair for each member of the Form Group.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{findingthevalue}</SyntaxHighlighter>
                    <h3>valueChanges</h3>
                    <p>The angular emits the valueChanges event whenever the value of any of the controls in the Form Group changes.</p>
                    <p> The value may change when user updates the element in the UI or programmatically through the setValue/patchValue method</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{valuechanges}</SyntaxHighlighter>
                </div>

            }
            {pagename === "setvaluepatchvalue" &&
                <div>
                    <h3>SetValue & PatchValue in Reactive Forms</h3>
                    <p>setValue or patchValue methods are used  to set a new value for the form control.</p>
                    <p>The difference is that with setValue we must include all the controls, while with the patchValue you can exclude some controls.</p>
                    <p>The SetValue requires that the object must match the structure of the FormGroup or FormArray exactly. Otherwise, it will result in an error.</p>

                    <h5>setValue Example</h5>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{setvalueExample}</SyntaxHighlighter>

                    <h5>patchValue Example</h5>
                    <p>Patches the value of the FormGroup. It accepts an object with control names as keys and does its best to match the values to the correct controls in the group.</p>
                    <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{patchvalueExample}</SyntaxHighlighter>
                </div>

            }
            {pagename === "reactiveformexample" &&
                <div>
                    <b>Step 1 - To build reactive forms, first, we need to import ReactiveFormsModule</b>
                    <div class="codeediterstatndard" >
                        src/app/app.module.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{importReactiveFormsModule}</SyntaxHighlighter>
                    </div>

                    <b>Step 2 — Adding a Form to the Component Template</b>
                    <div class="codeediterstatndard" >
                        user.component.html
                        <SyntaxHighlighter className="codesyntax" language="html" style={vscDarkPlus}>{form_example_html}</SyntaxHighlighter>
                    </div>

                    <b>Step 3 — Building the Component Class</b>

                    <div class="codeediterstatndard" >
                        user.component.ts
                        <SyntaxHighlighter className="codesyntax" language="js" style={vscDarkPlus}>{form_example_ts}</SyntaxHighlighter>
                    </div>
                </div>
            }




        </>

    )
}

export default Angularforms