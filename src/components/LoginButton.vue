<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<ul class="flex items-center">
		<RouterLink to="/login">
			<button
				class="before:ease relative h-12 w-40 overflow-hidden border-2 border-black before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
				<span class="relative z-10">Login</span>
			</button>
		</RouterLink>
	</ul>
</template>