import { Order } from "../../domain/models/order";
import { OrderType } from "../../domain/models/orderType";
import { ShoppingCartData } from "../../domain/models/shoppingCartData";
import { OrderService } from "../services/orderService";

export class ShoppingCartAdapter {

    constructor(private orderService: OrderService) { }

    getShoppingCartItems(): Array<ShoppingCartData> {
        const order = this.orderService.order;
        return [
            ...this.orderObjectsToArray(order, OrderType.HAMBURGERS),
            ...this.orderObjectsToArray(order, OrderType.APPETIZERS),
            ...this.orderObjectsToArray(order, OrderType.BEVERAGES),
            ...this.orderObjectsToArray(order, OrderType.DESSERTS)
        ];
    }

    add(shoppingCartData: ShoppingCartData): Order {
        return this.orderService.add(shoppingCartData.type, shoppingCartData);
    }

    subtractOne(shoppingCartData: ShoppingCartData): Order {
        return this.orderService.subtractOne(shoppingCartData.type, shoppingCartData);
    }

    remove(shoppingCartData: ShoppingCartData): Order {
        return this.orderService.remove(shoppingCartData.type, shoppingCartData);
    }

    private orderObjectsToArray(order: Order, type: OrderType): Array<ShoppingCartData> {
        const newLocal = order[type];

        return Object.keys(newLocal)
            .map(key => {
                const data = newLocal[+key];
                return { ...data, type: type };
            });
    }
}