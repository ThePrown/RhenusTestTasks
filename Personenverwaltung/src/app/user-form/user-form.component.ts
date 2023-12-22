import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserWithoutId } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent{
  @Input() userModel: any;
  @Output() onSubmit: EventEmitter<UserWithoutId> = new EventEmitter<UserWithoutId>();

  userForm!: FormGroup;
  editMode: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.userModel) {
      this.userForm.patchValue(this.userModel);
      this.editMode = true;
    }
  }

  submitForm() {
    if (this.userForm.valid) {
      this.onSubmit.emit(this.userForm.value);
      this.userForm.reset();
    }
  }
}
