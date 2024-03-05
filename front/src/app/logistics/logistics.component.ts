import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';

import { LogisticsService } from 'app/sevices/logistics.service';
import { Logistics } from './logistics';

@Component({
  selector: 'app-logistics',
  templateUrl: './add-logistics.html',
  styleUrls: ['./logistics.component.css']
})
export class AddLogisticsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddLogisticsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Logistics,
    private logisticsService:LogisticsService
) { }
  ngOnInit(): void {
    console.log(this.data.id_event);
  }


submit() {
  let id = this.data.id_event;
  const eventData: {
    chair: number;
    tableCount: number;
    classNb: number;
    accessory: string;
    id_event: number;

    // Add more properties as needed
  } = {
    chair: this.data.chair,
    tableCount: this.data.tableCount,
    classNb: this.data.classNb,
    accessory: this.data.accessory,
    id_event: this.data.id_event,

    // Initialize additional properties as needed
  };

  this.logisticsService.addLogistics(eventData,id).subscribe((res: any) => {
    // Handle success or show notification
    this.dialogRef.close();
  });
}
}



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-edit-logistics',
  templateUrl: 'edit-logistics.html',
})

// tslint:disable-next-line:component-class-suffix
export class EditLogistics implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<EditLogistics>,
      @Inject(MAT_DIALOG_DATA) public data: Logistics,
      private logisticsService: LogisticsService) { }


  ngOnInit(): void {
    console.log("this is data", this.data)
  }

  submitEdit() {
    const id = this.data.id_logistics;
    const logistics = {
      id_logistics:this.data.id_logistics,
      id: this.data.id_event,
      chair: this.data.chair,
      tableCount: this.data.tableCount,
      classNb: this.data.classNb,
      accessory: this.data.accessory,
      id_event:this.data.id_event,
    };
    console.log(logistics);
    this.logisticsService.updateLogistics(id, logistics).subscribe((res: any) => {
      // Handle success or show notification
      this.dialogRef.close();
    });
  }
}




