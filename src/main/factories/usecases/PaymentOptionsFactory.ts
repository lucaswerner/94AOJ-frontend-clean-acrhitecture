import { GetPaymentOptions } from "../../../data/usecases/GetPaymentOptions"
import { PaymentOptions } from "../../../domain/usecases/payments"
import { apiRoutes } from "../../routes/apiRoutes"
import { MakeApiUrl, MakeAxiosHttpClient } from "../http"

export const MakePaymentOptionsQuery = (): PaymentOptions => {
    return new GetPaymentOptions(
        MakeApiUrl(apiRoutes.paymentOptions),
        MakeAxiosHttpClient<void, PaymentOptions.Model>()
    )
}
