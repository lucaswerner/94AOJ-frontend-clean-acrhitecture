// import { PostAuthentication } from "../../../data"
// import { Authentication } from "../../../domain"
import { CreateOrder } from "../../../data/usecases/CreateOrder";
import { Orders } from "../../../domain/usecases/orders";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeAuthHttpClientDecorator } from "../decorators/authHttpClientDecoratorFactory";
import { MakeApiUrl } from "../http";

export const MakeOrder = (): Orders => {
  return new CreateOrder(
    MakeApiUrl(apiRoutes.orders),
    MakeAuthHttpClientDecorator<Orders.Params, Orders.Model>()
  );
};
