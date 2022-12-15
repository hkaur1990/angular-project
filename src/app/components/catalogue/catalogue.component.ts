import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from "../assets/data.json"


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit{

  constructor() {
    console.log('Reading local json files');
    console.log();
   }
   
   ngOnInit() {}
   
  }





