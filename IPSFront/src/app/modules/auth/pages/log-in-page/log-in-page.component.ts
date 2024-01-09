import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent {
  private _authService = inject(AuthService)
  private _router = inject(Router)
  public logInForm = new FormGroup({
    email: new FormControl('', [
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.maxLength(15),
      Validators.minLength(4)
    ])
  });

  public onSubmit(): void {
    const body = this.logInForm.getRawValue()
    this._authService.logIn(body as any).subscribe({
      next: res => {
        const { data } = res;
        sessionStorage.setItem('token', data.token)
        this._router.navigate(['/','search'])
      },
      error: err => {
        alert('LOG IN ERROR')
      }
    });
  }

}
