<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<header>
    <div class="w-full">
      <nav class="w-full absolute top-0 left-0">
        <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="w-max !flex flex-row items-center gap-2">
            <img src="https://www.phuwn.wtf/favicon-32x32.png" class="h-8 w-8" alt="Logo" />
            <span class="inline-block text-2xl font-semibold whitespace-nowrap">crawlie</span>
          </a>
          <div class="" id="navbar">
            <ul class="flex items-center">
              <button
                class="before:ease relative h-12 w-40 overflow-hidden border-2 border-black before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              >
                <RouterLink class="relative z-10" to="/login">Login</RouterLink>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>