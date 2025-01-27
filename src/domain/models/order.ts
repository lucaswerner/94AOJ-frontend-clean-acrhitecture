import { OrderItem } from "./orderItem";
import { OrderType } from "./orderType";

export type Order = {
    [key in OrderType]: OrderItem;
};
