import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit {
  createUserForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.createUserForm = this._formBuilder.group({
      name: [
        '',
        [
          Validators.maxLength(20),
          Validators.minLength(2),
          Validators.required,
        ],
      ],
    });
  }

  createUser() {
    if (this.createUserForm.invalid) {
      return;
    }

    this._userService
      .creteUser(this.createUserForm.value)
      .subscribe((response) => {
        console.log('response :>> ', response);
        this.dialogRef.close();
      });
  }
}
