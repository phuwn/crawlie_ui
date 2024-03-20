<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { userInfoStore } from "../store/userInfoStore";
defineProps<{ msg?: string, uploadFile?: (any) => void }>()
const { accessToken, update } = userInfoStore()
const fileInput = ref<HTMLInputElement | null>(null)
</script>

<template>
	<div>
		<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">{{ msg }}</label>
		<input id="file_input" type="file" ref="fileInput" style="display:none" @change="uploadFile">
		<button type="button"
			class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
			@click="fileInput?.click()">Upload File</button>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
