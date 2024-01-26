<template>
	<div class="card">
    <div class="title">
      <span class="arrow-left" @click="$router.push('/admin/list-products')">&larr;</span>
      <h5 slot="header" class="card-title">New product</h5>
    </div>
	<form>
       <div class="form-group">
        <label for="file">
           <input type="file" name="file" class="form-control-file" 
               id="file"
              @change='uploadFile'>
        </label>       
      </div>

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" 
             id="inputEmail3" 
             placeholder="name"
             v-model='product.name'>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Price</label>
    <div class="col-sm-5">
      <input type="number" class="form-control"
             id="inputPassword3" 
             placeholder="price"
             v-model='product.price'>
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Description</label>
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
              @click.prevent='createProduct'>Add product</button>
    </div>
  </div>
    </form>
    
	</div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { baseUrl } from '@/config'

const router = useRouter()

let product = ref({
  file:'',
	name: '',
	price: '',
	description: '',
})

function uploadFile(){
  product.value.file = file.files[0]
}

function createProduct(){
      if(product.value.name != '' && product.value.price != '' && product.value.description != ''){
         let formData = new FormData()
        const { file,name,price,description } = product.value
          formData.append('file',file)
          formData.append('name',name)
          formData.append('price',price)
          formData.append('description',description)
           axios.post(`${baseUrl}/products`,formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
         .then(res => res)
            product.value = ''
            router.push('/admin/list-products')
         .catch(err => alert(err))  
      }
    }
</script>

<style lang="scss" scoped>
.card	{
	padding: 15px;

  .title {
     display: flex;
     gap: 5px;
     margin-bottom: 30px;
  }

  .arrow-left {
    cursor: pointer;
  }

  .col-sm-1 {
    max-width: none;
  }

	.button-update {
  	margin-top: 10px;
 }
}
</style>