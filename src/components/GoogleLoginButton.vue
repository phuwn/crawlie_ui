<script setup lang="ts">
import { googleAuthCodeLogin } from "vue3-google-login"
import axios from 'axios';
import { storeToRefs } from "pinia";
import { userInfoStore } from "../store/userInfoStore";
import { useRouter } from "vue-router";

const router = useRouter()
const { name, email } = storeToRefs(userInfoStore())
const { update } = userInfoStore()

const login = () => {
  googleAuthCodeLogin().then((response) => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/v1/auth`, {
      code: response.code,
      redirect_uri: import.meta.env.VITE_WEBSITE_URL
    })
      .then(resp => {
        const data = resp.data
        data.loggedIn = true
        update(data)

        router.replace({ path: '/list-keywords' })
      })
      .catch((err) => {
        if (err.response) {
          alert("Something went wrong, please try again later!")
        }
        console.log(err)
      })
  })
}
</script>

<template>
  <!-- <div class="flex items-center justify-center h-screen dark:bg-gray-800"> -->
  <button
    class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
    @click="login">
    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
    <span>Login with Google</span>
  </button>
  <!-- </div> -->
</template>