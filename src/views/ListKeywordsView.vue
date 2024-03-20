<script setup lang="ts">
import FileInput from '../components/FileInput.vue';
import Search from '../components/Search.vue';
import ListKeywords from '../components/ListKeywords.vue';
</script>

<template>
	<main class="min-h-screen flex justify-center items-center px-10 w-11/12 mx-auto pt-16">
		<div class="flex flex-col gap-10 py-10">
			<div class="flex items-center justify-between w-full">
				<FileInput msg="Upload your keywords as a .csv file" />
				<Search />
			</div>
			<ListKeywords></ListKeywords>
		</div>
	</main>
</template>