import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import selectAllResponse from 'src/app/features/categories/selectAll/selectAllResponse';
import myTaskResponse from 'src/app/features/tasks/myTask/myTaskResponse';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabletask',
  templateUrl: './tabletask.component.html',
  styleUrls: ['./tabletask.component.css']
})
export class TabletaskComponent implements OnInit, OnChanges {

  @Input() reload: boolean = false;

  myTasks = {} as myTaskResponse;
  currentDate : Date = new Date();
  categories = {} as selectAllResponse;
  categoryFilterSelected :string|null = null;

  constructor(private apiService:ApiserviceService,private auth : AuthService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.reload){
      this.loadMyTask()
    } 
  }

  ngOnInit(): void {
    this.loadMyTask()
    this.loadCategories();
  }

  onChange(event:any, deviceValue:string) {
    this.categoryFilterSelected = deviceValue == "" ? null : deviceValue;
    this.loadMyTask();
  }

  loadCategories(){
    this.apiService.selectCategories().subscribe({
      next:(data)=>{
         if(data.code == 200){
          this.categories = data;
         }
      },
      error:(e) => {
       
      },
      complete:()=>{}
    })
  }

  loadMyTask(){
    let session = this.auth.getSession();
    this.apiService.selectMyTask(session!.id!,this.categoryFilterSelected).subscribe({
      next:(data)=>{
         if(data.code == 200){
            this.myTasks = data;
         }
      },
      error:(e) => {
        
      },
      complete:()=>{
        
      }
    })
  }

  deleteTask(id:string){
    this.apiService.deleteTaskById(id!).subscribe({
      next:(data)=>{
         if(data.code == 200){
            alert(data.message);
            this.loadMyTask()
         }
         else{
          alert(data.message);
         }
      },
      error:(e) => {
        
      },
      complete:()=>{
        
      }
    })
  }

  completeTask(id:string){
    this.apiService.completedTask(id!).subscribe({
      next:(data)=>{
         if(data.code == 200){
            alert(data.message);
            this.loadMyTask()
         }
         else{
          alert(data.message);
         }
      },
      error:(e) => {
        
      },
      complete:()=>{
        
      }
    })
  }
}
