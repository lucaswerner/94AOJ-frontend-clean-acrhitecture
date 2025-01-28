import { CardData } from "../../domain/models/cardData";
import { Order } from "../../domain/models/order";
import { OrderType } from "../../domain/models/orderType";
import { MakeStorageAdapter } from "../factories/cache/storeAdapterFactory";

export class OrderAdapter {

  private key = "order";

  constructor() {
    MakeStorageAdapter().set(this.key, {});
  }

  get(): Order {
    return MakeStorageAdapter().get(this.key) as Order;
  }

  set(type: OrderType, item: CardData): void {
    const orderFromStorage = { ...this.get() };
    orderFromStorage[type] = item;
    MakeStorageAdapter().set(this.key, orderFromStorage);
  }

  delete(): void {
    MakeStorageAdapter().delete(this.key);
  }
}
