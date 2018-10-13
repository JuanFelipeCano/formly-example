import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Formly
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form = new FormGroup({});
  model = { email: '', password: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        required: true
      },
      validation: {
        messages: {
          pattern: (error, field: FormlyFieldConfig) => 'This email is invalid.'
        }
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: '*******',
        minLength: '5',
        maxLength: '15',
        required: true,
      }
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  submit(model) {
    if (this.form.valid) {
      console.log(model);
    }
  }

}
