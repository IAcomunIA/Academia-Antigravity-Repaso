<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  emotion: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'happy', 'surprised', 'thinking', 'idle'].includes(value)
  }
})
</script>

<template>
  <div class="relative inline-block animate-float" :class="{
    'w-24 h-24': size === 'sm',
    'w-40 h-40': size === 'md',
    'w-56 h-56': size === 'lg'
  }">
    <!-- Robot head SVG inspired by the image -->
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">
      <!-- Main Head Body -->
      <path 
        d="M100 20 C40 20 30 60 30 110 C30 160 60 180 100 180 C140 180 170 160 170 110 C170 60 160 20 100 20Z" 
        fill="white" 
      />
      
      <!-- Visor / Eye Area background (if needed) -->
      <!-- <rect x="55" y="65" width="90" height="50" rx="25" fill="#111" /> -->
      
      <!-- Eyes -->
      <g :class="emotion === 'idle' ? 'animate-pulse' : ''">
        <!-- Left Eye -->
        <circle cx="80" cy="85" r="8" fill="#00F0FF" class="glow-cyan" />
        <!-- Right Eye -->
        <circle cx="120" cy="85" r="8" fill="#00F0FF" class="glow-cyan" />
      </g>
      
      <!-- Detail on the side (small antenna/light) -->
      <rect x="160" y="90" width="15" height="40" rx="7" fill="#E2E8F0" />
      <circle cx="167" cy="110" r="5" fill="#00F0FF" />

      <!-- Small shadow at the bottom -->
      <ellipse cx="100" cy="175" rx="40" ry="10" fill="rgba(0,0,0,0.1)" />
    </svg>
    
    <!-- Aura Glow behind -->
    <div class="absolute inset-0 bg-cyber-cyan/5 rounded-full blur-3xl -z-10"></div>
  </div>
</template>

<style scoped>
.glow-cyan {
  filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.8));
}
</style>
