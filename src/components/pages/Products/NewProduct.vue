<template>
	<div class="card">
		<h5 slot="header" class="card-title">New product</h5>
	<form>
      <div class="row">         
        <div class="col-md-3">
          <input type="text" class="form-control"
                    label="name"
                    placeholder="name"
                    v-model="product.name"/>         
        </div>
        <div class="col-md-4">
          <input type="number" class="form-control"
                    label="price"
                    placeholder="price"
                    v-model="product.price"/>       
        </div>
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="description"
                    placeholder="description"
                    v-model="product.description"/>
        </div>
      </div>       
      <div class="button-update">
        <button type="submit" 
                class="btn btn-info btn-fill float-right"
                @click.prevent="createProduct"> Create product
        </button>
      </div>
    </form>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

let product = ref({
	name: '',
	price: '',
	description: '',
})

function createProduct(){
      if(product.value.name != '' && product.value.price != '' && product.value.description != ''){
        axios.post('https://dummyjson.com/products',{
          body: product.value
      })
         .then(res => res)
         .catch(err => alert(err)) 
          product.value = ''  
      }
    }
</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

	.button-update {
  	margin-top: 10px;
 }
}
</style>