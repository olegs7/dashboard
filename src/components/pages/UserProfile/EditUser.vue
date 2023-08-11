<template>
	<div class="card">
		<h4 slot="header" class="card-title">Edit user</h4>
	<form>
      <div class="row">
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="name"
                    placeholder="name"
                    v-model="user.name"/>         
        </div>
        <div class="col-md-4">
          <input type="email" class="form-control"
                    label="email"
                    placeholder="email"
                    v-model="user.email"/>       
        </div>
        <div class="col-md-4">
          <input type="text" class="form-control"
                    label="phone"
                    placeholder="phone"
                    v-model="user.phone"/>
        </div>
      </div>   

      <div class="button-update">
        <button type="submit" 
                class="btn btn-info btn-fill float-right"
                @click.prevent="updateUser"> Update user
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

let userId = ''
let user = ref({
	name: '',
	email: '',
	phone: '',
})

onMounted(()=>{
	userId = route.params.id
	getUser(route.params.id)
})

function getUser(userId){
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
            user.value = res.data 
        })
      }
function updateUser(){
        axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`,user)
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