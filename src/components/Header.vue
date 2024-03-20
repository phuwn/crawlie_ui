<script setup lang="ts">
import { storeToRefs } from "pinia";
import LoginButton from './LoginButton.vue';
import ProfileCard from './ProfileCard.vue';
import { userInfoStore } from "../store/userInfoStore";
const { loggedIn } = storeToRefs(userInfoStore())
</script>

<template>
  <header>
    <nav class="w-full absolute top-0 left-0">
      <div class="flex flex-wrap items-center justify-between mx-auto p-10 w-11/12">
        <a href="/" class="w-max !flex flex-row items-center gap-2">
          <img src="https://www.phuwn.wtf/favicon-32x32.png" class="h-8 w-8" alt="Logo" />
          <span class="inline-block text-2xl font-semibold whitespace-nowrap">crawlie</span>
        </a>
        <div class="" id="navbar">
          <LoginButton v-if="!loggedIn" />
          <ProfileCard v-show="loggedIn" />
        </div>
      </div>
    </nav>
  </header>
</template>