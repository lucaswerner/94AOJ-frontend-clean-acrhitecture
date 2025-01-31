<script setup lang="ts">
import ShoppingCart from '../../../../presentation/components/ShoppingCart.vue';
// import { cardDataList } from '../../../../data/shoppingCartData';
// import { MakeOrderAdapter } from '../../cache/orderAdapterFactory';
// import { Order } from '../../../../domain/models/order';
import { onMounted, reactive } from 'vue';
import { MakeShoppingCartDecorator } from '../../decorators/shoppingCartDecoratorFactory';
import { ShoppingCartData } from '../../../../domain/models/shoppingCartData';
import { PaymentOption } from '../../../../domain/models/paymentOption';
import { MakePaymentOptionsQuery } from '../../usecases/PaymentOptionsFactory';
import { OrderModel } from '../../../../domain/models/orderModel';
import { MakeOrder } from '../../usecases/OrdersFactory';
import { useRouter } from 'vue-router';

const router = useRouter();

const shoppingCartDecorator = MakeShoppingCartDecorator();

const state: { cartItems: Array<ShoppingCartData>, paymentOptions: Array<PaymentOption>, createdOrder: OrderModel | null, paymentOptionId: string } = reactive({
  cartItems: shoppingCartDecorator.getShoppingCartItems(),
  paymentOptions: [],
  paymentOptionId: "23",
  createdOrder: null
})

console.log(shoppingCartDecorator.getShoppingCartItems());

const addItem = (data: ShoppingCartData): void => {
  shoppingCartDecorator.add(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const onSubtractOne = (data: ShoppingCartData): void => {
  shoppingCartDecorator.subtractOne(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const onRemove = (data: ShoppingCartData): void => {
  shoppingCartDecorator.remove(data);
  state.cartItems = shoppingCartDecorator.getShoppingCartItems();
}

const sumAllValues = (items: Array<ShoppingCartData>): string => {
  return items.reduce((acc, { value, count }) => {
    acc += (value * count);
    return acc;
  }, 0)
    .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

onMounted(async () => {
  try {
    state.paymentOptions = await MakePaymentOptionsQuery().get();
  } catch (error) {
    console.error('Error fetching payment options:', error);
  }
});

const submitCheckout = async (cartItems: Array<ShoppingCartData>, paymentOptionId: string) => {
  const items = cartItems.map(item => ({ title: item.title + ` (x${item.count})`, value: item.value * item.count }));
  state.createdOrder = await MakeOrder().create({
    items,
    paymentOption: paymentOptionId
  })
  showDialog = true;
}

const redirectToHome = () => {
  shoppingCartDecorator.deleteAll();
  router.push({ name: 'Home' });
}

let showDialog = false;

</script>

<template>
  <header>
    <h1>The Mixed Burger</h1>
  </header>
  <main>
    <section id="menu">
      <h2>Shopping Cart</h2>
      <div class="cart-sumup">
        <div>
          <ShoppingCart v-for="cardData in state.cartItems" :key="cardData.id" v-bind:data="cardData"
            v-bind:on-add="() => addItem(cardData)" v-bind:on-subtract-one="() => onSubtractOne(cardData)"
            v-bind:on-remove="() => onRemove(cardData)" />
        </div>
        <div>
          <h1 class="total-right">
            Total: R$ {{ sumAllValues(state.cartItems) }}
          </h1>
        </div>

        <v-row>
          <v-col>
            <v-radio-group label="Selecione uma opção de pagamento:" v-model="state.paymentOptionId">
              <v-radio v-for="option in state.paymentOptions" :label="option.text" :value="option.id"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn background="red" rounded="0" size="x-large" variant="text" class="btn-checkout bg-red-darken-2 " @click="submitCheckout(state.cartItems, '23')" block>COMPRAR</v-btn>
          </v-col>
        </v-row>

      </div>
      <v-dialog v-model="showDialog" width="auto">
        <v-card>
          <v-row>
            <v-col>
              <v-card-title>{{ state.createdOrder?.message }}</v-card-title>
              <v-card-text class="description">
                <v-row>
                  <v-col>
                    Nº do pedido: {{ state.createdOrder?.orderNumber }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    Itens
                    <ul>
                      <li v-for="item in state.createdOrder?.details?.items">
                        {{ item.title }} - R$ {{ item.value }}
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
          <template v-slot:actions>
            <v-btn class="ms-auto" text="Ok" @click="redirectToHome()"></v-btn>
          </template>
        </v-card>
      </v-dialog>
      <p class="ops">{{ state.createdOrder }}</p>
    </section>
  </main>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  padding: 2rem;
}

#menu {
  max-width: 1000px;
  margin: 0 auto;
}

.total-right {
  text-align: right;
}

.btn-checkout {
  float: right;
}

.ops {
  display: none;
}
</style>
