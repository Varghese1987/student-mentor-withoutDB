import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})
export class AddMentorComponent implements OnInit {

  mentorForm: FormGroup;

  constructor(private fb:FormBuilder, private dataService : DataService, private router : Router) {
    this.mentorForm = this.fb.group({
      name:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  postData(){
    this.dataService.createMentor(this.mentorForm.value).subscribe((data)=>{
      alert("success")
    })
  }

}
