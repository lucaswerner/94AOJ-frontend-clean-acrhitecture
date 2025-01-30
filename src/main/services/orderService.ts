import { CardData } from "../../domain/models/cardData";
import { Order } from "../../domain/models/order";
import { OrderType } from "../../domain/models/orderType";
import { OrderAdapter } from "../adapters/orderAdapter";

export class OrderService {

    private _order: Order;

    constructor(private orderAdapter: OrderAdapter) {
        const orderFromStorage = orderAdapter.get();

        if (!orderFromStorage) {
            this._order = Object.keys(OrderType)
                .reduce((previousValue, nextValue) => {
                    return { ...previousValue, [nextValue]: {} };
                }, {} as Order);

        } else {
            this._order = orderFromStorage;
        }
    }

    get order(): Order {
        return this._order;
    }

    add(type: OrderType, item: CardData): Order {
        const newOrder = { ...this._order };

        const orderTypes = newOrder[type];

        const orderItem = orderTypes[item.id];
        const count = !!orderItem ? orderItem.count + 1 : 1;

        orderTypes[item.id] = { ...item, count };

        this.orderAdapter.set(newOrder);

        return newOrder;
    }

    subtractOne(type: OrderType, item: CardData): Order {
        const newOrder = { ...this._order };
        const orderTypes = newOrder[type];

        const orderItem = orderTypes[item.id];

        if (!orderItem) {
            return this._order;
        }

        if (orderItem.count > 1) {
            orderItem.count--;
        } else {
            delete orderTypes[item.id];
        }

        this.orderAdapter.set(newOrder);

        return newOrder;
    }

    remove(type: OrderType, item: CardData): Order {
        const newOrder = { ...this._order };
        const orderTypes = newOrder[type];

        const orderItem = orderTypes[item.id];

        if (!orderItem) {
            return this._order;
        }

        delete orderTypes[item.id];

        this.orderAdapter.set(newOrder);

        return newOrder;
    }

}