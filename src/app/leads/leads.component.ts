import { Component, OnInit } from '@angular/core';

import { Car } from '../model/car';
import { DataAccessService } from '../../data-access/data-access.service';
import { Lead } from '../model/lead';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  displayedColumns: Array<string>;
  leads: Array<Lead>;

  constructor(private data: DataAccessService) { }

  ngOnInit() {
    this.data.getLeads().subscribe(data => {
      this.displayedColumns = ['firstName', 'lastName', 'car'];
      this.leads = data as Array<Lead>;
    });
  }

  implodeCarProperties(car: Car): string {
    return Object.keys(car).filter(key => key != "id").map(key => car[key]).join(", ");
  }

}
