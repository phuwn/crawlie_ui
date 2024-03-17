<script setup>
import GoogleLoginButton from '../components/GoogleLoginButton.vue';


const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
}
</script>

<template>
  <main class="min-h-screen w-full flex justify-center items-center">
    <div class="w-1/3 min-h-64 shadow-2xl rounded-md flex justify-center items-center flex-col gap-4">
    <h1>Log in or sign up</h1>
    <!-- <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Sign in with Google
    </button> -->
    <GoogleLoginButton/>
  </div>
  </main>
</template>