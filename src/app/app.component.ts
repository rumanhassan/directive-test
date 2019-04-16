import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'directive-test';
  sampleForm: FormGroup;

  ngOnInit() {
    this.sampleForm = new FormGroup({
      lovingAngular: new FormControl('yes')
    });
  }
}
