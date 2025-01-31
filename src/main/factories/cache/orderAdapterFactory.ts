import { OrderAdapter } from "../../adapters/orderAdapter";
import { OrderService } from "../../services/orderService";

export const MakeOrderAdapter = (): OrderService =>
    new OrderService(new OrderAdapter());
