<script setup>
defineProps({
  title: String,
  description: String,
  level: String,
  icon: String,
  bgIcon: String // Path for the watermark icon if needed
})
</script>

<template>
  <div class="course-card group relative bg-white dark:bg-[#0a0c1a] border border-slate-200 dark:border-white/5 rounded-[32px] p-8 min-w-[320px] md:min-w-[380px] h-[340px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-cyber-cyan/30 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]">
    
    <!-- Watermark Background Icon -->
    <div class="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
      <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" v-if="!bgIcon"/>
        <path :d="bgIcon" v-else />
      </svg>
    </div>

    <div class="space-y-6 relative z-10">
      <!-- Icon Container -->
      <div class="w-16 h-16 bg-slate-50 dark:bg-[#0d1225] border border-slate-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-cyber-cyan shadow-inner group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path :d="icon" />
        </svg>
      </div>

      <div class="space-y-3">
        <h3 class="text-2xl font-heading tracking-tight text-slate-900 dark:text-white group-hover:text-cyber-cyan transition-colors duration-300">
          {{ title }}
        </h3>
        <p class="text-slate-500 dark:text-gray-dim text-sm leading-relaxed max-w-[90%]">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center mt-auto relative z-10">
      <div class="flex flex-col">
        <span class="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 font-bold mb-1">Dificultad</span>
        <span class="text-sm font-heading font-bold text-soft-purple drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
          {{ level }}
        </span>
      </div>

      <button class="w-12 h-12 bg-slate-100 dark:bg-[#1a1f33] border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-deep-space group-hover:scale-110 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Inner Glow effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</template>

<style scoped>
.font-heading {
  font-family: 'Michroma', sans-serif;
}
</style>
