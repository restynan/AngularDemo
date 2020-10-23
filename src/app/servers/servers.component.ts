import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'test';
  userName = "";
  allowNewServer = false;


  serverCreationStatus='No server was created';
    
constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
 this.serverCreationStatus='server was created! server Name is: '+ this.serverName;
  }
  
  onAddUser(){
    
    this.userName= '';
   

  }

  /*onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;

  }*/

}
