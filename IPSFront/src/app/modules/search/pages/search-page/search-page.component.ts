import { Component } from '@angular/core';
import { SearchInputComponent } from '@modules/search/components/search-input/search-input.component';
import { ResultsAreaComponent } from '@shared/shared/components/results-area/results-area.component';
import { IPS } from '@core/models/ips.model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ResultsAreaComponent,
    SearchInputComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  resultList:IPS[] = [];
  setData(results:any):void {
    this.resultList = results;
  }
}
