<template>
	<div class="card">
		<h4 slot="header" class="card-title">Edit product</h4>
	<form>
      <div class="row">
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="name"
                    placeholder="name"
                    v-model="product.title"/>         
        </div>
        <div class="col-md-4">
          <input type="number" class="form-control"
                    label="price"
                    placeholder="price"
                    v-model="product.price"/>       
        </div>
        <div class="col-md-4">
          <textarea type="text" class="form-control"
                    label="description"
                    placeholder="description"
                    v-model="product.description"/>
        </div>
      </div>   

      <div class="button-update">
        <button type="submit" 
                class="btn btn-info btn-fill float-right"
                @click.prevent="updateProduct"> Update product
        </button>
      </div>
    </form>
	</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

let productId = ''
let product = ref({
	title: '',
	price: '',
	description: '',
})

onMounted(()=>{
	productId = route.params.id
	getUser(route.params.id)
})

function getUser(productId){
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(res => {
              console.log(res.data)
            product.value = res.data 
        })
      }
function updateUser(){
        axios.put(`https://dummyjson.com/products/${productId}`,product)
          .then(res => res.data)
          .catch(err => alert(err))
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