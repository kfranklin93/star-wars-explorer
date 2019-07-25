import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})

export class ModalContentComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
