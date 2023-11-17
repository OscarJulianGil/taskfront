import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import selectAllResponse from 'src/app/features/categories/selectAll/selectAllResponse';
import registerTaskRequest from 'src/app/features/tasks/register/registerTaskRequest';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registertask',
  templateUrl: './registertask.component.html',
  styleUrls: ['./registertask.component.css']
})
export class RegistertaskComponent implements OnInit {

  
  @Output() itemRegistered = new EventEmitter<boolean>();

  taskModel = {} as registerTaskRequest;
  categories = {} as selectAllResponse;
  isWaiting : boolean = false;

  dateModel = {} as NgbDateStruct;
  reactiveForm:FormGroup;


  constructor(private apiService:ApiserviceService,private auth: AuthService){
      this.reactiveForm = new FormGroup({
          name: new FormControl(this.taskModel.taskName, [Validators.required]),
          description: new FormControl(this.taskModel.description, [Validators.required]),
          category: new FormControl('', [Validators.required]),
          date: new FormControl('', [Validators.required])
      })
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.apiService.selectCategories().subscribe({
      next:(data)=>{
         if(data.code == 200){
          this.categories = data;
         }
      },
      error:(e) => {},
      complete:()=>{}
    })
  }

  onChange(event:any, deviceValue:string) {
    if(deviceValue != null){
      this.taskModel.categoryId = deviceValue;
    }
  }

  registerTask(){

    if(!this.reactiveForm.valid){
      alert("Please, type all the information.");
      return;
    }
    let session = this.auth.getSession();
    this.taskModel.userAssignedId = session?.id!;
    this.taskModel.dateResponse = new Date(this.dateModel.year, this.dateModel.month - 1, this.dateModel.day);
    this.isWaiting = true;
    this.apiService.registerTask(this.taskModel).subscribe({
      next:(data)=>{
         if(data.code == 200){
            alert(data.message);
            this.addNewItem(true);
            setTimeout(()=>{
              this.addNewItem(false);
            },1000);
         }
      },
      error:(e) => {
        this.isWaiting = false;
        alert("Server error");
      },
      complete:()=>{
        this.isWaiting = false;
      }
    })
  }

  
  addNewItem(value: boolean) {
    this.itemRegistered.emit(value);
  }
}
