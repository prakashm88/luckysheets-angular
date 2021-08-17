import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//const luckysheet = require('luckysheet');
// @ts-ignore: Unreachable code error
import * as luckysheet from 'luckysheet';
//import luckysheet from 'luckysheet/dist/luckysheets.esm.js';

@Component({
  selector: 'app-ngbulk',
  templateUrl: './ngbulk.component.html',
  styleUrls: ['./ngbulk.component.scss']
})
export class NgbulkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      container: 'luckysheet' //luckysheet is the container id
    }
    luckysheet.create(options);
  }

}
