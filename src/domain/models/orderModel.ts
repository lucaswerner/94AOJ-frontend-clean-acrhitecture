export type OrderParams = {
    items: {
        title: string,
        value: number
    }[],
    paymentOption: string,
};

export type OrderModel = {
    orderNumber: string,
    createdAt: string,
    message: string,
    details: OrderParams,
};

