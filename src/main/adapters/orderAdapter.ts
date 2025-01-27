import { CardData } from "../../domain/models/cardData";
import { Order } from "../../domain/models/order";
import { OrderItem } from "../../domain/models/orderItem";
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

    add(type: OrderType, item: CardData): void {
        const storageOrder: Order = { ...this.get() };
        console.log('storageOrder', storageOrder)
        const storageItem: OrderItem = { ...storageOrder[type] };
        console.log('storageItem', storageItem);

        let count = 1;
        const orderItemData = storageItem[item.orderId];
        if (orderItemData) {
            count += orderItemData.count;
        }

        storageItem[item.orderId] = {
            data: item,
            count
        };

        storageOrder[type] = storageItem;

        MakeStorageAdapter().set(this.key, storageOrder);
    }

    remove(type: OrderType, item: OrderItem): void {

    }

    delete(): void {
        MakeStorageAdapter().delete(this.key);
    }
}
