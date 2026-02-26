<script setup>
// SVGs inline usados internamente para evitar dependencias externas adicionales

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'info'
  }
})
</script>

<template>
  <div class="card-course border-l-4 border-l-cyber-cyan p-0 overflow-hidden animate-slide-up shadow-2xl">
    <div class="bg-cyber-cyan/5 p-5 border-b border-white/5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/30">
        <!-- SVG Placeholder -->
        <svg v-if="icon === 'info'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
      </div>
      <h3 class="text-xl font-heading text-white tracking-wide">{{ title }}</h3>
    </div>
    
    <div class="p-8 text-gray-mist leading-relaxed text-lg">
      <p>{{ content }}</p>
      <slot />
    </div>
  </div>
</template>
