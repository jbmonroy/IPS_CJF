import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as dataMock from '@core/data/ips.data.json';
import { IPS } from '@core/models/ips.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Output('callback-data')callback_data: EventEmitter<IPS[]> = new EventEmitter();
  src: string = '';

  search(term:string):void {
    const {data} = dataMock;
    if(term.length >= 3) {
      //TODO: Implementar service.
      let fData =  data.filter(item=>String(item.id_sitio).toLowerCase().includes(term.toLowerCase()) || item.ing_cjf.toLowerCase().includes(term.toLowerCase()));
      this.callback_data.emit(fData as IPS[]);
    }
    if(term.length == 0) {
      this.callback_data.emit([]);
    }
  }
}
