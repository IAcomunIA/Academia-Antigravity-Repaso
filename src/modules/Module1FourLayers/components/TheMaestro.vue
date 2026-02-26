<script setup>
import Astronaut from '@/components/game/Astronaut.vue'

defineProps({
  dialogue: String
})
</script>

<template>
  <div class="flex items-start gap-6 p-6 card-space border-cyber-cyan/30">
    <Astronaut size="sm" emotion="happy" />
    <div class="space-y-2">
      <h4 class="font-heading text-cyber-cyan text-sm uppercase">El Maestro</h4>
      <div class="bg-deep-space/40 p-4 rounded-xl border border-white/5 relative">
        <p class="text-white italic leading-relaxed">{{ dialogue || 'Bienvenido, Recluta. La arquitectura es la base de todo poder.' }}</p>
        <!-- Speech Bubble Tail -->
        <div class="absolute top-4 -left-2 w-4 h-4 bg-deep-space/40 border-l border-b border-white/5 transform rotate-45"></div>
      </div>
    </div>
  </div>
</template>
