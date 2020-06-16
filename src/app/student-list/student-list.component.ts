import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList;
  

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.studentList=this.dataService.getStudent();
  }
  

}
