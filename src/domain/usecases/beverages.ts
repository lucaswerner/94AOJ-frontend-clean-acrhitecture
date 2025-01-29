import { Beverage } from "../models/beverage"

export namespace Beverages{
    export type Model = Beverage
}

export interface Beverages {
    get(): Promise<Beverages.Model[]>
}