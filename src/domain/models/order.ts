import { CardData } from "./cardData";
import { OrderType } from "./orderType";

type OrderTypeList = CardData & {
  count: number
};

export type Order = {
  [key in OrderType]: {
    [id in number]: OrderTypeList;
  }
};
