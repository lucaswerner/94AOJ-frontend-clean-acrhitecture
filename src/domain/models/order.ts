import { CardData } from "./cardData";
import { OrderType } from "./orderType";

type OrderTypeList = CardData & {
  count: number
};

export type OrderTypeData = {
  [id in number]: OrderTypeList;
};

export type Order = {
  [key in OrderType]: OrderTypeData
};
