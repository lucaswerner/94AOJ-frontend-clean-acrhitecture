import { OrderParams, OrderModel } from "../models/orderModel"

export namespace Orders {
    export type Params = OrderParams
    export type Model = OrderModel
}

export interface Orders {
    create(params: Orders.Params): Promise<Orders.Model>
}
