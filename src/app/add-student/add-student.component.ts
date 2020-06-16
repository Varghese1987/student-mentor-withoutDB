import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder, private dataService : DataService, private router : Router) {
    this.registerForm = this.fb.group({
      name:this.fb.control("",Validators.required),
      college:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
    })
  }

  ngOnInit(): void {
  }
  postData(){
    this.dataService.createStudent(this.registerForm.value).subscribe((data)=>{
      alert("success")
    })
  }

}
