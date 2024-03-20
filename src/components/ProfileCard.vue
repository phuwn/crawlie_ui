<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userInfoStore } from "../store/userInfoStore";

const router = useRouter();
const { name, email, avatar } = storeToRefs(userInfoStore())
const { update } = userInfoStore()

function signOut() {
	update({})
	router.replace({ path: '/' })
}
</script>

<template>
	<ul class="flex items-center">
		<img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
			class="w-10 h-10 rounded-full cursor-pointer" :src="avatar" alt="User dropdown">

		<!-- Dropdown menu -->
		<div id="userDropdown"
			class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 border">
			<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
				<div>{{ name }}</div>
				<div class="font-medium truncate">{{ email }}</div>
			</div>
			<div class="py-1" @click="signOut">
				<RouterLink to="/"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
					<svg class="w-5 h-5 inline-block mr-2 text-gray-700 dark:text-white" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
					</svg>
					Sign out
				</RouterLink>
			</div>
		</div>
	</ul>
</template>