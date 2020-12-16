import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  ngServeData: any;
  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    // this.getDataService.getNgServeData()
    //   .subscribe(data => {
    //     this.ngServeData = data;
    //   });
  }

}
