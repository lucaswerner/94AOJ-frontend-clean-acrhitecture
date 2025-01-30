import { GetDesserts } from "../../../data/usecases/GetDesserts";
import { Desserts } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const MakeDessertsQuery = (): Desserts => {
  return new GetDesserts(
    MakeApiUrl(apiRoutes.desserts),
    MakeAxiosHttpClient<void, Desserts.Model>()
  )
}
