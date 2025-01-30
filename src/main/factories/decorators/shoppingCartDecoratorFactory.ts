import { ShoppingCartAdapter } from "../../adapters/shoppingCartAdapter";
import { MakeOrderAdapter } from "../cache/orderAdapterFactory";

export const MakeShoppingCartDecorator = (): ShoppingCartAdapter =>
    new ShoppingCartAdapter(MakeOrderAdapter());