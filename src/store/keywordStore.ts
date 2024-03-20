import { defineStore } from 'pinia'
import {ref} from 'vue'

export interface Keyword {
	name: string;
	ad_words_count: number;
	links_count: number;
	search_results_count: string;
	html_cache: string;
	status: number;
	last_crawled_at: string;
}

export const keywordStore = defineStore('keyword', () => {
  const keywordMap = new Map<string, Keyword>()
	const keywords = ref<Keyword[]>([])

	function setKeyword(name:string,keyword:Keyword) {
		keywordMap.set(name,keyword)
	}

	function getKeyword(name:string):Keyword | undefined {
		return keywordMap.get(name)
	}

	function newKeywords(data:Keyword[]) {
		data.forEach((value) => {
			keywords.value.push(value)
			setKeyword(value.name, value)
		})
	}

  return { keywords, setKeyword, getKeyword, newKeywords }
})