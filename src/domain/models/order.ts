import { CardData } from "./cardData";
import { OrderType } from "./orderType";

export type Order = {
  [key in OrderType]: CardData;
};
