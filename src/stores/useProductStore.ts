import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/validations/productValidation';


export const useProductStore = defineStore('product', () => {
  let products = ref<Product[]>([]);


  function addProduct(product: Product) {
    products.value.push(product);
  }

  function deleteProduct(id: string){
    products.value.filter(product => product.id === id);
  }

  function editProduct(product: Product){
    const index = products.value.findIndex(cust => cust.id === product?.id);
    products.value[index] = product;
  }

  function getAllProducts(productsToAdd: Product[]){
    const allProducts = [...products.value, ...productsToAdd];
    products.value = [...allProducts];
  }

  const currentProducts = computed(() => products);

  return {currentProducts, addProduct, deleteProduct, editProduct, getAllProducts}
})
