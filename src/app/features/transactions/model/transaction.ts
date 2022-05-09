export class Transaction {
  transactionId?: string
  createdBy?: string
  source?: string
  channel?: string
  network?: string
  amount?: number
  date?: string
  networkRef?: string
  status!: string
  narration?: string
}
