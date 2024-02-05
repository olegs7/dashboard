<template>
	<div class="search">
			<input class="form-control mr-sm-2" 
				  	 type="search" 
				  	 placeholder="Search name"
				  	 :value="modelValue" @input="updateValue">
			<span class="clear" @click="clearSearch">&#10005;</span>
		</div>	
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue','clearSearch'])

const updateValue = (e) => {
	emit('update:modelValue',e.target.value)
}

const clearSearch = () => {
	emit('clearSearch')
}
</script>

<style lang="scss" scoped>
.search {
	position: relative;

	.clear {
		position: absolute;
		top: 7px;
		right: 10px;
		cursor: pointer;
	}
}
</style>