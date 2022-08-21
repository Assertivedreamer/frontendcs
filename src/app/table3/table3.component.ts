import { Component, OnInit } from '@angular/core';
import {ApiService} from "../Service/api.service";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {

  dataSource!: MatTableDataSource<any>;
  studentData: any;
  constructor(private api :ApiService ){     }

  ngOnInit(): void {
    this.api.getconall().subscribe((res)=>{
      this.studentData=res;
      console.log(this.studentData);
    });



  }
}
