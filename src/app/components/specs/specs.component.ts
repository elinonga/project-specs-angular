import { Component, OnInit } from '@angular/core';
import { SpecService } from '../../services/spec.service';
import { Specs } from '../../Specs';
import { SPECS } from '../../mock-specs';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {

  specs: Specs[] = SPECS;

  constructor(private specService: SpecService) {}

  ngOnInit(): void {
    this.specService.getSpecs().subscribe((specs) => (this.specs = specs));
  }

  deleteSpec(spec: Specs) {
    this.specService
      .deleteSpecs(spec)
      .subscribe(
        () => (this.specs = this.specs.filter((t) => t.id !== spec.id))
      );
  }

  toggleReminder(spec: Specs) {
    spec.reminder = !spec.reminder;
    this.specService.updateSpecsReminder(spec).subscribe();
  }

  addSpec(spec: Specs) {
    this.specService.addSpecs(spec).subscribe((spec) => this.specs.push(spec));
  }
}
