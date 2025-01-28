import { Hamburger } from "../models/hamburgers"

export namespace Hamburgers{
    export type Model = Hamburger
}

export interface Hamburgers {
    get(): Promise<Hamburgers.Model[]>
}