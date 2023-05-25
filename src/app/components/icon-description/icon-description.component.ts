import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IconDescription } from './icon.description.interface';

@Component({
  selector: 'app-icon-description',
  templateUrl: './icon-description.component.html',
  styleUrls: ['./icon-description.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDescriptionComponent  implements OnInit{
  @Input() data!: { icon: string, name: string, span: string,label:string, account:boolean }[] & IconDescription;



  ngOnInit(): void {
   console.log('funn', this.data);
  }

}
