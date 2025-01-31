import { GetBeverages } from "../../../data/usecases/GetBeverages";
import { Beverages } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const MakeBeveragesQuery = (): Beverages => {
  return new GetBeverages(
    MakeApiUrl(apiRoutes.beverages),
    MakeAxiosHttpClient<void, Beverages.Model>()
  )
}
