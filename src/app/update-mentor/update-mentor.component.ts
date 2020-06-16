import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-mentor',
  templateUrl: './update-mentor.component.html',
  styleUrls: ['./update-mentor.component.css']
})
export class UpdateMentorComponent implements OnInit {
currentStudentData;
currentStudentId;
mentorList;
updateForm : FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private dataService : DataService, private fb:FormBuilder) {
    
   }

  ngOnInit(){
    this.updateForm = this.fb.group({
      name:this.fb.control("",Validators.required),
      college:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      mentor:this.fb.control("",Validators.required),
    })
    this.mentorList = this.dataService.getMentor();
    this.currentStudentId = this.activatedRoute.snapshot.params.studentId;
    this.currentStudentData = this.dataService.getStudentById(this.currentStudentId).subscribe((data)=>{
      this.updateForm.patchValue({
        name : data.name,
        college : data.college,
        email : data.email,
        mentor : data.mentor
      })
    })
    
  }

  updateMentor(){
    this.dataService.updateStudentById(this.currentStudentId,this.updateForm.value)
  }

}
