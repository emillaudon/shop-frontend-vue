import { getProducts } from "@/services/productService";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        this.products = await getProducts();
      } catch (error) {
        throw new Error(`Could not get products: ${error.status}`);
      } finally {
        this.loading = false;
      }
    },
  },
});
