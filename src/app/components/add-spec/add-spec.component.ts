import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Specs } from 'src/app/Specs';


@Component({
  selector: 'app-add-spec',
  templateUrl: './add-spec.component.html',
  styleUrls: ['./add-spec.component.css']
})
export class AddSpecComponent implements OnInit {

  @Output() onAddSpec: EventEmitter<Specs> = new EventEmitter();
  project_title: string;
  deadline: string;
  details: string;
  tech_stack: string;
  developers: number;
  role: string;
  reminder: boolean = false;
  showAddSpec: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSpec = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

onSubmit() {
if (!this.project_title || !this.deadline || !this.details || !this.role) {
  alert('Is the title, deadline, details and role given?');
  return;
}

const newSpec: Specs = {
  project_title: this.project_title,
  deadline: this.deadline,
  details: this.details,
  tech_stack: this.tech_stack,
  developers: this.developers,
  role: this.role,
  reminder: this.reminder,
};

this.onAddSpec.emit(newSpec);

this.project_title = '';
this.deadline = '';
this.details = '';
this.tech_stack = '';
this.developers = 0;
this.role = '';
this.reminder = false;
}


}
