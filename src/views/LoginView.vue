<script setup>
import GoogleLoginButton from '../components/GoogleLoginButton.vue';
</script>

<template>
  <main class="min-h-screen w-full flex justify-center items-center">
    <div class="w-1/3 min-h-64 shadow-2xl rounded-md flex justify-center items-center flex-col gap-4">
      <h1>Log in or sign up</h1>
      <GoogleLoginButton />
    </div>
  </main>
</template>