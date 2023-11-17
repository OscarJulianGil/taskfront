import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

    reloadTable:boolean =false;


    registedEvent(reload: boolean){
        this.reloadTable = reload;
    }
}
