import { GetHamburgers } from "../../../data/usecases/GetHamburgers";
import { Hamburgers } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const MakeHamburgersQuery = (): Hamburgers => {
  return new GetHamburgers(
    MakeApiUrl(apiRoutes.hamburgers),
    MakeAxiosHttpClient<void, Hamburgers.Model>()
  )
}
