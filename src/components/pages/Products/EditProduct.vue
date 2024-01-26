<template>
	<div class="card">
		<div class="title">
      <span class="arrow-left" @click="$router.push('/admin/list-products')">&larr;</span>
      <h5 slot="header" class="card-title">Edit user</h5>
    </div>    

    <div class="img-product" v-if="product.file">
      <img :src="`${baseUrl}/`+ product.file" alt="img-product">
      <span class="close" @click="deleteFile">&times;</span>
    </div>

     <form>
       <div class="form-group">
        <label for="file">
           <input type="file" class="form-control-file" 
               id="file"
               name='file'
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
              @click.prevent='updateProduct'>Update</button>
    </div>
  </div>
    </form>

	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute,useRouter } from 'vue-router'
import { baseUrl } from '@/config'

const route = useRoute()
const router = useRouter()

let productId = ''
let product = ref({
  file: '',
	name: '',
	price: '',
	description: '',
})

function uploadFile(){
  product.value.file = file.files[0]
}

onMounted(()=>{
	productId = route.params.id
	getProduct(productId)
})

function getProduct(productId){
        axios.get(`${baseUrl}/products/${productId}`)
          .then(res => {
            let {file,name,price,description} = res.data
           product.value = {file,name,price,description}
        })
}

function updateProduct(){
        axios.patch(`${baseUrl}/products/${productId}`,product.value,{
          headers: {
              'Content-Type': 'multipart/form-data',
          }
        })
          .then(res => res)
            router.push('/admin/list-products') 
          .catch(err => console.log(err))
}

function deleteFile(){
  product.value.file = ''
}      
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;

  .arrow-left {
    cursor: pointer;
  }

  .title {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }
    .button-update {
      margin-top: 10px;
    }

    .img-product {
      position: relative;
      padding: 10px;

      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        cursor: pointer;
      }

      .close {
        position: absolute;
        top: 0;
      }
    }

    .col-sm-1 {
      max-width: none;
  }

}
</style>