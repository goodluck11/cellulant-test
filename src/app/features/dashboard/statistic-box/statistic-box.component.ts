import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistic-box',
  templateUrl: './statistic-box.component.html',
  styleUrls: ['./statistic-box.component.scss']
})
export class StatisticBoxComponent implements OnInit {
  @Input()
  label: string = ''
  @Input()
  color: string = ''
  @Input()
  value: string = '1,000'
  @Input()
  icon: string = 'file-protect'

  constructor() { }

  ngOnInit(): void {
  }

}
