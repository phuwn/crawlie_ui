<script setup>
import axios from 'axios';
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia';
import { ref, onBeforeMount } from 'vue'
import { keywordStore } from "../store/keywordStore";
import { userInfoStore } from "../store/userInfoStore";
import FileInput from '../components/FileInput.vue';
import ListKeywords from '../components/ListKeywords.vue';

const { newKeywords } = keywordStore()
const { keywords } = storeToRefs(keywordStore())
const { accessToken, update } = userInfoStore()
const router = useRouter()
const isLoading = ref(false)
const error = ref(null)

async function fetchKeywords() {
	isLoading.value = true;
	try {
		const response = await axios.get("http://localhost:8089/v1/keywords", {
			headers: {
				'Authorization': `Bearer ${accessToken}`
			}
		})
		if (response.status !== 200) {
			console.log(response)
			throw new Error(`API request failed with status ${response.status}`);
		}
		newKeywords(response.data)
	} catch (err) {
		if (err.response && err.response.status === 401) {
			update({})
			router.replace({ path: '/' })
		}
		console.error('Error fetching keywords:', err);
		error.value = err;
	} finally {
		isLoading.value = false;
	}
}

async function uploadFile(e) {
	try {
		const file = e.target.files[0]
		console.log(file.name)
		if (file.name.split('.').pop() != 'csv') {
			throw new Error(`File upload should be in csv format`)
		}
		const fd = new FormData()
		fd.append('file', file)
		const response = await axios.post('http://localhost:8089/v1/keywords', fd, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data'
			}
		})
		if (response.status !== 200) {
			console.log(response)
			throw new Error(`API request failed with status ${response.status}`);
		}
		fetchKeywords()
	} catch (err) {
		if (err.response && err.response.status === 401) {
			update({})
			router.replace({ path: '/' })
		}
		console.error('Error fetching keywords:', err);
		error.value = err;
	}
}

onBeforeMount(() => fetchKeywords())
</script>

<template>
	<main class="min-h-screen flex justify-center items-center px-10 w-11/12 mx-auto pt-16">
		<div class="flex flex-col gap-10 py-10">
			<FileInput msg="Upload your keywords as a .csv file" :uploadFile="uploadFile" />
			<ListKeywords :keywords="keywords" :isLoading="isLoading"></ListKeywords>
		</div>
	</main>
</template>