import { GetAppetizers } from "../../../data/usecases/GetAppetizers";
import { Appetizers } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const MakeAppetizersQuery = (): Appetizers => {
  return new GetAppetizers(
    MakeApiUrl(apiRoutes.appetizers),
    MakeAxiosHttpClient<void, Appetizers.Model>()
  )
}
