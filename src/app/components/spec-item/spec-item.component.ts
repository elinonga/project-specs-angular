import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Specs } from 'src/app/Specs';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spec-item',
  templateUrl: './spec-item.component.html',
  styleUrls: ['./spec-item.component.css']
})
export class SpecItemComponent implements OnInit {

  @Input() spec: Specs;
  @Output() onDeleteSpec: EventEmitter<Specs> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Specs> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(spec) {
    this.onDeleteSpec.emit(spec);
  }

  onToggle(spec) {
    this.onToggleReminder.emit(spec);
  }

}
