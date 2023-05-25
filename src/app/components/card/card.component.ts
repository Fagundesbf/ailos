import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconDescriptionComponent } from '../icon-description/icon-description.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconDescriptionComponent

  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CardComponent implements OnInit {

  @Input() dataSource!: any;

  ngOnInit(): void {
    console.log('dataSource', this.dataSource);

  }
}
