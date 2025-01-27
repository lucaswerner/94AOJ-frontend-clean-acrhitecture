import { CardData } from "./cardData";

export type OrderItem = {
    [key in string]: {
        count: number;
        data: CardData;
    }
};
