import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPS } from '@core/models/ips.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-results-area',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './results-area.component.html',
  styleUrl: './results-area.component.css'
})
export class ResultsAreaComponent {
  @Input() results: IPS[] = [];
  columnsToDisplay: string[] = [
    'id_sitio',
    'estado',
    'ciudad',
    'ing_cjf'
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: IPS | null;

}
