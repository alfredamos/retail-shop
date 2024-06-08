import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Customer } from '@/validations/customerValidation';


export const useCustomerStore = defineStore('customer', () => {
  let customers = ref<Customer[]>([]);


  function addCustomer(customer: Customer) {
    customers.value.push(customer);
  }

  function deleteCustomer(id: string){
    customers.value.filter(customer => customer.id === id);
  }

  function editCustomer(customer: Customer){
    const index = customers.value.findIndex(cust => cust.id === customer?.id);
    customers.value[index] = customer;
  }

  function getAllCustomers(customersToAdd: Customer[]){
    const allCustomers = [...customers.value, ...customersToAdd];
    customers.value = [...allCustomers];
  }

  const currentCustomers = computed(() => customers);

  return {currentCustomers, addCustomer, deleteCustomer, editCustomer, getAllCustomers}
})
