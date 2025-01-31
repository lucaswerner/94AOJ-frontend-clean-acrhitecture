import { Dessert } from "../models/dessert"

export namespace Desserts{
    export type Model = Dessert
}

export interface Desserts {
    get(): Promise<Desserts.Model[]>
}