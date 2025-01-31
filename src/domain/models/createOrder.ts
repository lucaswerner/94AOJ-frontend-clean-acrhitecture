export type CreateOrder = {
    items: [
        {
            title: string,
            value: number
        }
    ],
    paymentOption: string,
};
