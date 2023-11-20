import { defineStore } from 'pinia'
import jsonData from "@/assets/data.json";

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
      cart: []
  }),

  actions: {
    fetchProductsFromDB() {
      fetch('data.json/products')
          .then(res => res.json())
          .then(json => {
            this.products = json.products;
          })
    },

    fetchProductsFromFile() {
      this.products = jsonData.products;
    },

    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      console.log('>>>>> ID', id)
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})