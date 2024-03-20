<script setup lang="ts">
import type { Keyword } from "../store/keywordStore";
defineProps<{ keywords: Keyword[], isLoading: boolean }>();
</script>

<template>
	<div v-if="keywords.length > 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3 text-center"> Keyword
					</th>
					<th scope="col" class="px-6 py-3 text-center"> Status
					</th>
					<th scope="col" class="px-6 py-3 text-center"> Number of Advertisers
					</th>
					<th scope="col" class="px-6 py-3 text-center"> Number of Links
					</th>
					<th scope="col" class="px-6 py-3 text-center"> Total number of Search results
					</th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					v-for="{ name, ad_words_count, links_count, search_results_count, status } in keywords" :key="name">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"> {{ name }}
					</th>
					<td class="px-6 py-4 text-center"> {{ status }}
					</td>
					<td class="px-6 py-4 text-center"> {{ ad_words_count }}
					</td>
					<td class="px-6 py-4 text-center"> {{ links_count }}
					</td>
					<td class="px-6 py-4 text-center"> {{ search_results_count != "" ? search_results_count : "0" }}
					</td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-else>
		<p v-if="isLoading">Loading keywords...</p>
		<p v-else>Failed to load keywords.</p>
	</div>
</template>