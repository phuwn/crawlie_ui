<script setup lang="ts">
import { ref } from 'vue';
import { keywordStore } from "../store/keywordStore";
import { storeToRefs } from 'pinia';
defineProps<{ msg?: string }>()
const fileInput = ref<HTMLInputElement | null>(null)
const { uploadKeywordsFile } = keywordStore()
const { error } = storeToRefs(keywordStore())
</script>

<template>
	<div>
		<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">{{ msg }}</label>
		<p v-if="error" class="text-red-500 text-sm py-2">{{ error }}</p>
		<input id="file_input" type="file" ref="fileInput" style="display:none" @change="uploadKeywordsFile">
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
