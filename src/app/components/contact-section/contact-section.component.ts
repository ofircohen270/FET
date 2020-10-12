import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  ContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.ContactForm = this.formBuilder.group({
      email: ['', Validators.required],
      comment: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  /**
   * Runs when the user submits the form
   */
  onSubmit() {
    if (this.ContactForm.valid) {
      console.log(this.ContactForm.value) // Here it would be sent to the server
      const form = <HTMLFormElement>document.getElementById('contact-form');
      form.reset();
    }
  }
}
