import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  
  @Input({ required: true }) message!: string;
  @Input({ required: true }) title!: string;


  constructor(){
    
  }
}


