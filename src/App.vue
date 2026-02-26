<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-deep-space overflow-x-hidden selection:bg-cyber-cyan selection:text-deep-space">
    <!-- Main Content Container -->
    <main class="relative z-10">
      <RouterView v-slot="{ Component }">
        <transition 
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    
    <!-- Background Effects -->
    <div class="fixed inset-0 pointer-events-none z-0 hidden dark:block">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a2a6c_0%,#000000_100%)] opacity-50"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

:root {
  --cyber-cyan: #00F0FF;
  --deep-space: #0A0E27;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, .font-heading {
  font-family: 'Orbitron', sans-serif;
}
</style>
