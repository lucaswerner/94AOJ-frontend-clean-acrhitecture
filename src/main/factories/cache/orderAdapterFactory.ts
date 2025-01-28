import { OrderAdapter } from "../../adapters/orderAdapter";

export const MakeOrderAdapter = (): OrderAdapter =>
    new OrderAdapter();
