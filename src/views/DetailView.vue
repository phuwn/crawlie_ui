<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from "vue";
import { keywordStore } from "../store/keywordStore";
import { useRouter } from 'vue-router';
const props = defineProps({
	name: String
})
const { keywords, isLoading } = storeToRefs(keywordStore())
const keywordDetail = computed(() => {
	return keywords.value.find(keyword => {
		return keyword.name == props.name
	})
})

const router = useRouter()
if (keywordDetail.value == null) {
	router.replace('/list-keywords')
}
</script>

<template>
	<main class="min-h-screen flex justify-center items-center px-10 w-11/12 mx-auto">
		<div v-html="keywordDetail?.html_cache || ''"></div>
	</main>
</template>