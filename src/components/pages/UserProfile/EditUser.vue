<template>
	<div class="card">
    <div class="title">
      <span class="arrow-left" @click="$router.push('/admin/list-users')">&larr;</span>
      <h5 slot="header" class="card-title">Edit user</h5>
    </div>		

    <div class="img-user" v-if="user.file">
      <img :src="`${baseUrl}/`+ user.file" alt="img-user">
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
             v-model='user.name'>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-5">
      <input type="email" class="form-control"
             id="inputPassword3" 
             placeholder="email"
             v-model='user.email'>
    </div>
  </div>
   <div class="form-group row">
    <label for="inputPassword3" class="col-sm-1 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="number" class="form-control"
             id="inputPassword3" 
             placeholder="phone"
             v-model='user.phone'>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" 
              class="btn btn-primary"
              @click.prevent='updateUser'>Update</button>
    </div>
  </div>
    </form>
	</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import {baseUrl} from '@/config'

const route = useRoute()
const router = useRouter()

let userId = ''
let user = ref({
  file:'',
	name: '',
	email: '',
	phone: '',
})

function uploadFile(){
  user.value.file = file.files[0]
}

onMounted(()=>{
	userId = route.params.id
	getUser(userId)
})

function getUser(userId){
        axios.get(`${baseUrl}/users/${userId}`)
          .then(res => {
            let {file,name,email,phone} = res.data
           user.value = {file,name,email,phone}
          })
          .catch(err => console.log(err))
}

function updateUser(){
        axios.patch(`${baseUrl}/users/${userId}`,user.value,{
           headers: {
              'Content-Type': 'multipart/form-data',
          }
        })
          .then(res => res)
            router.push('/admin/list-users') 
          .catch(err => console.log(err))      
}

function deleteFile(){
  user.value.file = ''
}
</script>

<style lang="scss" scoped>
.card	{
	padding: 20px;

  .arrow-left {
    cursor: pointer
  }

  .title {
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
  }
    .button-update {
      margin-top: 10px;
    }

    .img-user {
      position: relative;
      padding: 10px;

      img {
        height: 50px;
        width: 50px;
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