<template>
	<div class="card">
		<h5 slot="header" class="card-title">New product</h5>
	<form>
       <div class="form-group">
        <label for="file">
           <span class="file material-icons">account_circle</span>
           <input type="file" class="form-control-file" 
               id="file"
               name='files'
              @change='uploadFile'>
        </label>       
      </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" 
             id="inputEmail3" 
             placeholder="name"
             v-model='product.title'>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-5">
      <input type="email" class="form-control"
             id="inputPassword3" 
             placeholder="email"
             v-model='product.price'>
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"
             id="inputPassword3" 
             placeholder="phone"
             v-model='product.description'>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" 
              class="btn btn-primary"
              @click.prevent='createUser'>Add product</button>
    </div>
  </div>
    </form>
    
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {urlProducts} from '@/config'

let product = ref({
	title: '',
	price: '',
	description: '',
})

function createProduct(){
      if(product.value.name != '' && product.value.price != '' && product.value.description != ''){
        axios.post(`${urlProducts}`,{
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