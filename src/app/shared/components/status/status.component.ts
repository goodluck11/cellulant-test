import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <div class="status" [ngClass]="color">{{status}}</div>
  `,
  styles: [`
    .status {
      display: inline-block;
      padding: 0.35rem 0.65rem;
      font-size: .75rem;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
    }

    .green {
      background-color: #66AB5A;
    }

    .danger {
      background-color: #E05140;
    }

  `]
})
export class StatusComponent implements OnInit {
  @Input()
  status = 'Success'
  color = 'green'

  constructor() { }

  ngOnInit(): void {
    this.color = this.status.toLowerCase() === 'success' ? 'green' : 'danger';
  }

}
