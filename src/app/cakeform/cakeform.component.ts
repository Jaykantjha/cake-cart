import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CakeformData } from './cakeform.model';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseService } from '../angularfire.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-cakeform',
  templateUrl: './cakeform.component.html',
  styleUrls: ['./cakeform.component.css']
})
export class CakeformComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted = false;
  // public cakedetails: Array<any> = [];
  subscribedRoute:any;
  routeData:Object={};
  

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) {
                // router.events.subscribe(event => {
                //   console.log(event);
                // });
              }

              ngOnInit() {
                this.subscribedRoute = this.activatedRoute.params.subscribe(params => {
                 this.routeData= params;
                 });
               }


  processForm(form: NgForm) {
    if (form.valid) {
        const data: CakeformData = {
          size: form.value.size,
          spongetype: form.value.sponge,
          cream: form.value.cream,
          egg_or_eggless: form.value.egg,
          cake_filler: form.value.cakefiller,
          message: form.value.message,
          message_color: form.value.messagecolor,
          first_name: form.value.fullname,
          email_ID: form.value.email,
          mobile_number: form.value.mno,
          category: this.routeData['category'],
          subgroup: this.routeData['subgroup']
        };
        // this.firebaseService.addmessage(data).then(res => {
        //     form.reset();
        //   });
        let existingCartdata = JSON.parse(localStorage.getItem('cart')) || [];
        let updatedcart=[];
        if(existingCartdata.length > 0){
          existingCartdata.push(data);
          updatedcart = existingCartdata;
        }else{
          updatedcart = [data];
        }
        localStorage.setItem('cart', JSON.stringify(updatedcart));
        this.router.navigate(['/cart']);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)');
  }

  ngOnDestroy() {
    this.subscribedRoute.unsubscribe();
  }
}
