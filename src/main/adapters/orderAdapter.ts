import { CardData } from "../../domain/models/cardData";
import { Order } from "../../domain/models/order";
import { OrderType } from "../../domain/models/orderType";
import { MakeStorageAdapter } from "../factories/cache/storeAdapterFactory";

export class OrderAdapter {

  private readonly key = "order";

  constructor() {
    const initialOrder = Object.keys(OrderType)
      .reduce((previousValue, nextValue) => {
        return { ...previousValue, [nextValue]: {} };
      }, {} as Order);

    MakeStorageAdapter().set(this.key, initialOrder);
  }

  get(): Order {
    return MakeStorageAdapter().get(this.key) as Order;
  }

  add(type: OrderType, item: CardData): void {
    const orderFromStorage: Order = { ...this.get() };
    const orderTypes = orderFromStorage[type];

    const orderItem = orderTypes[item.id];
    const count = !!orderItem ? orderItem.count + 1 : 1;

    orderTypes[item.id] = { ...item, count };

    MakeStorageAdapter().set(this.key, orderFromStorage);

    console.log(orderFromStorage);
  }

  remove(type: OrderType, item: CardData): void {
    const orderFromStorage: Order = { ...this.get() };
    const orderTypes = orderFromStorage[type];

    const orderItem = orderTypes[item.id];

    if (!orderItem) {
      return;
    }

    if (orderItem.count > 1) {
      orderItem.count--;
    } else {
      delete orderTypes[item.id];
    }

    MakeStorageAdapter().set(this.key, orderFromStorage);

    console.log(orderFromStorage);
  }

  delete(): void {
    MakeStorageAdapter().delete(this.key);
  }
}
