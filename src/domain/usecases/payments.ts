import { PaymentOption } from "../models/paymentOption"

export namespace PaymentOptions{
    export type Model = PaymentOption
}

export interface PaymentOptions {
    get(): Promise<PaymentOptions.Model[]>
}