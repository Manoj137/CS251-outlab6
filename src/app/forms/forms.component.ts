import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})


export class FormsComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback : new FormControl(''),
    comment : new FormControl(''),
  });
  initdata;

  constructor(private dataService: DataService) {}
   ngOnInit() {
      this.dataService.getData()
      .subscribe((data) => this.displaydata(data)); 
   }

   displaydata(data) {
    this.initdata=data;
      this.profileForm.patchValue({
   	  name: data.name,
     	email: data.email,
     	feedback: data.feedback,
     	comment: data.comment
     })
 }
  onSubmit() {
  this.dataService.addData(this.profileForm.value)
  .subscribe((data) => this.pop(data),
    (error) => this.err());
}
    err(){
      alert('Your feedback is not submitted, please check if name,email,feedback fields are empty.')
    }
   pop(data) {
    alert('Your feedback is successfully submitted.')
   	this.profileForm.patchValue({
      name: data.name,
      email: data.email,
      feedback: data.feedback,
      comment: data.comment     
    });

   }

}

