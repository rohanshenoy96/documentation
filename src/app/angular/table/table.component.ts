import { Component, OnInit, Input } from '@angular/core';
import { ColumnDefModel } from './../models/column-def.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columnDef: Array<ColumnDefModel>;
  @Input() data: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.columnDef = [{ title: 'Sr No.', propertyName: 'srNo'}, {title: 'Option',  propertyName: 'option'}, {title: 'Description', propertyName: 'description'}];
    this.data = [
      {srNo: 'X', option: 'Option 1', description: 'Desctiption 1'},
      {srNo: 'X', option: 'Option 2', description: 'Desctiption 2'},
      {srNo: 'X', option: 'Option 3', description: 'Desctiption 3'},
      {srNo: 'X', option: 'Option 4', description: 'Desctiption 4'},
      {srNo: 'X', option: 'Option 5', description: 'Desctiption 5'}
    ]
  }

}
