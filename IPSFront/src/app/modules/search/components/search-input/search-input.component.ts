import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPS } from '@core/models/ips.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchService } from '@modules/search/services/search.service';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Output('callback-data') callback_data: EventEmitter<IPS[]> = new EventEmitter();
  src: string = '';
  private _router = inject(Router)
  private _authService = inject(AuthService)
  private _searchService = inject(SearchService)
  search(term: string): void {
    if (term.length >= 3) {
      this._searchService.getDataFiltered(term).subscribe({
        next: res => {
          const { data } = res;
          this.callback_data.emit(data)
        },
        error: err => {
          alert('SEARCH ERROR')
        }
      })
    } else {
      this.callback_data.emit([])
    }
  }
  public logOut(): void {
    this._authService.logOut()
    this._router.navigate(['/', 'log-in'])
  }
}
