import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tailor-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() body?: string;
  @Input() fromDate?: Date;
  @Input() toDate?: Date;
  @Input() align?: string;
  @Input() titleSize?: number = 12;
  @Input() editMode?: boolean;
  editing = false;

  MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor() {
    console.log('Tile Constructed')
  }

  ngOnInit(): void {
    console.log('Tile Initilized')
  }

  toggleEdit() {
    this.editing = !this.editing
  }

  simplifyDate(date: Date){
    console.log(date)
    return this.MONTHS[date.getMonth()] + ' ' + date.getFullYear()
  }
}
