import { defineStore } from "pinia";

interface ProductInfo {
  name: string;
  price: number;
}

interface State {
  productList: ProductInfo[];
  product: ProductInfo | null;
}

interface Counter {
  counter: number;
}

export const useProductStore = defineStore("ProductStore", {
  state: (): State => {
    return {
      productList: [],
      product: null,
    };
  },
  actions: {
    async fill() {
      this.productList = (await import("@/data/data.json")).default;
    },
  },
});

export const useCountStore = defineStore({
  id: "counter",
  state: (): Counter => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increaseCount() {
      this.counter++;
    },
    decreaseCount() {
      this.counter--;
    },
  },
});
