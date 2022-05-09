import { Component, OnInit } from '@angular/core';
import {Transaction} from "@features/transactions/model/transaction";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = []

  constructor() { }

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions() {
    this.transactions = [
      {transactionId: '1279113129', date: '2022/02/18 03:25', createdBy: 'GEORGE KIHARA', source: '233244671409', channel: 'Mobile', network: 'MTN', amount: 7, networkRef: '16114184597', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279113150', date: '2022/02/18 03:27', createdBy: 'GEORGE KIHARA', source: '233244671409', channel: 'Mobile', network: 'MTN', amount: 7, networkRef: '16114203278', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279113215', date: '2022/02/18 03:36', createdBy: 'GEORGE KIHARA', source: '233245020987', channel: 'Mobile', network: 'MTN', amount: 45.59, networkRef: '16114264667', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279113515', date: '2022/02/18 04:06', createdBy: 'GEORGE KIHARA', source: '233559587359', channel: 'Mobile', network: 'MTN', amount: 30, networkRef: '16114445474', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279113675', date: '2022/02/18 04:23', createdBy: 'GEORGE KIHARA', source: '233544041668', channel: 'Mobile', network: 'MTN', amount: 35, networkRef: 'Insufficient Funds', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279113731', date: '2022/02/18 04:31', createdBy: 'GEORGE KIHARA', source: '233240206006', channel: 'Mobile', network: 'MTN', amount: 16, networkRef: '16114549658', narration: 'Checkout Request', status: 'Success'},
      {transactionId: '1279113800', date: '2022/02/18 04:39', createdBy: 'GEORGE KIHARA', source: '233549230505', channel: 'Mobile', network: 'MTN', amount: 11, networkRef: '16114576239', narration: 'Checkout Request', status: 'Success'},
      {transactionId: '1279113812', date: '2022/02/18 04:41', createdBy: 'GEORGE KIHARA', source: '233243440591', channel: 'Mobile', network: 'MTN', amount: 13, networkRef: '1611458154', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279114512', date: '2022/02/18 05:42', createdBy: 'GEORGE KIHARA', source: '233249743935', channel: 'Mobile', network: 'MTN', amount: 80, networkRef: '16114793999', narration: 'Checkout Request', status: 'Failed'},
      {transactionId: '1279114751', date: '2022/02/18 O5:56', createdBy: 'GEORGE KIHARA', source: '233249318341', channel: 'Mobile', network: 'MTN', amount: 16, networkRef: '16114840392', narration: 'Checkout Request', status: 'Failed'},
    ];
  }

}
