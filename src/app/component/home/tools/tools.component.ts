import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  card: Array<any>=[];
  constructor() { 
    this.card = [{
      imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
      description: 'asdferff',
      id: 0
   
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
      description: 'asdferff',
      id: 1
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
      description: 'asdferff',
      id: 2
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
       description: 'asdferff',
       id:3
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
      description: 'asdferff',
      id:4
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
      description: 'asdferff',
      id:5
     },
     {
       imgpath: '../../../../assets/images/herramientas/Mesa de trabajo 50.png',
       description: 'asdferff',
       id:6
     }
   
     ]
     
    

  }

  ngOnInit(): void {
  }

  
  

}
