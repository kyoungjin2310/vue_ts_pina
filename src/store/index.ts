import { defineStore } from "pinia";
interface State {
  productList: ProductInfo[];
  product: ProductInfo | null;
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

interface ProductInfo {
  name: string;
  price: number;
}
