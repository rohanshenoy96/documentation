import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-placeholder',
  templateUrl: './title-placeholder.component.html',
  styleUrls: ['./title-placeholder.component.scss']
})
export class TitlePlaceholderComponent {
  @Input() title: string;

}
