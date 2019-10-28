import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
@Input() name: string;
  constructor() { }

  ngOnInit() {
    
  }

}