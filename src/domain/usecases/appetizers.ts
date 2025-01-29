import { Appetizer } from "../models/appetizer"

export namespace Appetizers{
    export type Model = Appetizer
}

export interface Appetizers {
    get(): Promise<Appetizers.Model[]>
}