import { useRouter } from "vue-router";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { userInfoStore } from "./userInfoStore";
import axios from "axios";

export interface KeywordResponse {
  data: Keyword[];
  count: number;
}

export interface Keyword {
  name: string;
  ad_words_count: number;
  links_count: number;
  search_results_count: string;
  html_cache: string;
  status: number;
  last_crawled_at: Date;
}

export const keywordStore = defineStore("keyword", () => {
  const rawData = ref<KeywordResponse>();
  const keywords = computed(() => {
    return rawData.value?.data || [];
  });
  const count = computed(() => {
    return rawData.value?.count || 0;
  });
  const limit = ref(10);
  const q = ref("");
  const currentPage = ref(1);
  const isLoading = ref(false);
  const router = useRouter();
  const { accessToken } = storeToRefs(userInfoStore());
  const { update } = userInfoStore();
  const error = ref("");
  const offset = computed(() => {
    return (currentPage.value - 1) * limit.value;
  });
  const hasNextPage = computed(() => {
    return offset.value + limit.value <= count.value;
  });

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  async function fetchKeywords() {
    isLoading.value = true;
    try {
      const response = await axios.get(
        `http://localhost:8089/v1/keywords?limit=${limit.value}&offset=${offset.value}&q=${q.value}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.value}`,
          },
        }
      );
      if (response.status !== 200) {
        console.log(response);
        throw new Error(`API request failed with status ${response.status}`);
      }
      rawData.value = response.data;
    } catch (err: any) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            error.value = err.response.data.error;
          case 401:
            update({});
            router.replace({ path: "/" });
            break;
        }
      }
      console.error("Error fetching keywords:", err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  async function uploadKeywordsFile(e) {
    try {
      const file = e.target.files[0];
      console.log(file.name);
      if (file.name.split(".").pop() != "csv") {
        throw new Error(`File upload should be in csv format`);
      }
      const fd = new FormData();
      fd.append("file", file);
      const response = await axios.post(
        "http://localhost:8089/v1/keywords",
        fd,
        {
          headers: {
            Authorization: `Bearer ${accessToken.value}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status !== 200) {
        console.log(response);
        throw new Error(`API request failed with status ${response.status}`);
      }
      fetchKeywords();
    } catch (err: any) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            error.value = err.response.data.error;
          case 401:
            update({});
            router.replace({ path: "/" });
            break;
        }
      }
      console.error("Error fetching keywords:", err);
      error.value = err;
    }
  }

  return {
    count,
    q,
    keywords,
    isLoading,
    limit,
    offset,
    currentPage,
    hasNextPage,
    setCurrentPage,
    fetchKeywords,
    uploadKeywordsFile,
  };
});
