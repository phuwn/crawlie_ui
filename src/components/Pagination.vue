<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue'
import { keywordStore } from "../store/keywordStore";
const { fetchKeywords, setCurrentPage } = keywordStore()
const { currentPage, hasNextPage, limit, offset, count } = storeToRefs(keywordStore())

async function paginateLoad(page: number) {
	setCurrentPage(page)
	await fetchKeywords()
}
</script>

<template>
	<div class="flex flex-col items-center py-8">
		<!-- Help text -->
		<span class="text-sm text-gray-700 dark:text-gray-400">
			Showing <span class="font-semibold text-gray-900 dark:text-white">{{ offset + 1 }}</span> to <span
				class="font-semibold text-gray-900 dark:text-white">{{ offset + limit > count ? count : offset + limit }}</span>
			of <span class="font-semibold text-gray-900 dark:text-white">{{ count }}</span> Entries
		</span>
		<!-- Buttons -->
		<div class="inline-flex mt-2 xs:mt-0">
			<button
				class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				@click="paginateLoad(currentPage - 1)" v-if="currentPage > 1">
				Prev
			</button>
			<button
				class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				@click="paginateLoad(currentPage + 1)" v-if="hasNextPage">
				Next
			</button>
		</div>
	</div>
</template>