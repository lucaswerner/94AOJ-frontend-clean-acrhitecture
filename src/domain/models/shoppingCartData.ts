import { CardData } from "./cardData";
import { OrderType } from "./orderType";

export type ShoppingCartData = CardData & {
    type: OrderType;
    count: number;
}
