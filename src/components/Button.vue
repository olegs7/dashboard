<template>
	<button class="button">{{ button }}</button>
</template>

<script setup>
defineProps({
	button:{
		type: String,
	}
})
</script>

<style lang="scss" scoped>
.button {
	padding: 0.2rem 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s;
	margin-right: 5px;
	color: #fff;
}

	.button:hover {
		opacity: 0.8;
}
</style>