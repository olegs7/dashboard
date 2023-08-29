<template>
	<div class="card">
		<h5 slot="header" class="card-title">Edit product</h5>
     <form>
       <div class="form-group">
        <label for="file">
           <img class="img" :src="product.images[0]">
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
      <input type="number" class="form-control"
             id="inputPassword3" 
             placeholder="price"
             v-model='product.price'>
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"
             id="inputPassword3" 
             placeholder="description"
             v-model='product.description'>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" 
              class="btn btn-primary"
              @click.prevent='updateProduct'>Update</button>
    </div>
  </div>
    </form>

	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import {urlProducts} from '@/config'

const route = useRoute()

let productId = ''
let product = ref({
  images: '',
	title: '',
	price: '',
	description: '',
})

onMounted(()=>{
	productId = route.params.id
	getProduct(route.params.id)
})

function getProduct(productId){
        axios.get(`${urlProducts}/${productId}`)
            .then(res => {
            product.value = res.data 
        })
      }
function updateProduct(){
        axios.put(`${urlProducts}/${productId}`,product)
          .then(res => res.data)
          .catch(err => alert(err))
      }
</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

    .img {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }
	
.button-update {
	margin-top: 10px;
 }
}
</style>