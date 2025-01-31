import { Order } from "../../domain/models/order";
import { MakeStorageAdapter } from "../factories/cache/storeAdapterFactory";

export class OrderAdapter {

  private readonly key = "order";

  get(): Order {
    return MakeStorageAdapter().get(this.key) as Order;
  }

  set(order: Order): void {
    MakeStorageAdapter().set(this.key, order);
  }

  delete(): void {
    MakeStorageAdapter().delete(this.key);
  }
}
