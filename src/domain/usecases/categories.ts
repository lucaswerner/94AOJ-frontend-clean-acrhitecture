import { Category } from "../models/category";

export namespace Categories{
    export type Model = Category
}

export interface Categories {
    get(): Promise<Categories.Model[]>
}