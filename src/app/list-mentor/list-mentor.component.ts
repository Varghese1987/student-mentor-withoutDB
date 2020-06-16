import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-mentor',
  templateUrl: './list-mentor.component.html',
  styleUrls: ['./list-mentor.component.css']
})
export class ListMentorComponent implements OnInit {
mentorList;
  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.mentorList = this.dataService.getMentor();
  }

}
