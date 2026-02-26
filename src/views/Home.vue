<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '@/utils/theme'
import Astronaut from '@/components/game/Astronaut.vue'
import Button from '@/components/ui/Button.vue'
import CourseCard from '@/components/CourseCard.vue'
import PromoPack from '@/components/PromoPack.vue'

const router = useRouter()
const { isDark, toggleTheme } = useTheme()

const sliderRef = ref(null)

const scrollSlider = (direction) => {
  if (!sliderRef.value) return
  const scrollAmount = 400
  sliderRef.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

const courses = [
  {
    title: 'Prompt Engineering',
    description: 'Domina el arte de comunicarte con modelos de IA generativa.',
    level: 'INICIACIÓN',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgIcon: 'M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4V7a5 5 0 0 0-5-5zm-3 6V7a3 3 0 1 1 6 0v1H9z'
  },
  {
    title: 'LLM Fundamentals',
    description: 'Entiende la arquitectura y el funcionamiento de los grandes modelos.',
    level: 'INTERMEDIO',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z',
    bgIcon: 'M12 11V7a3 3 0 0 0-6 0v4a5 5 0 0 0-1 3v2h8v-2a5 5 0 0 0-1-3z'
  },
  {
    title: 'Agentes Autónomos',
    description: 'Crea sistemas que razonan y ejecutan tareas complejas.',
    level: 'AVANZADO',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    bgIcon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  {
    title: 'Sistemas Multi-Agente',
    description: 'Orquestación de flujos de trabajo con múltiples identidades de IA.',
    level: 'AVANZADO',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    bgIcon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    title: 'RAG & Vector DBs',
    description: 'Conecta modelos con tus propios datos usando búsqueda semántica.',
    level: 'INTERMEDIO',
    icon: 'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01',
    bgIcon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'IA para Developers',
    description: 'Integración de APIs y SDKs de IA en aplicaciones modernas.',
    level: 'INICIACIÓN',
    icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6-1.6 1.6a1 1 0 001.4 1.4l2.3-2.3a1 1 0 000-1.4l-2.3-2.3a1 1 0 00-1.4 0zM9.3 17.7a1 1 0 000-1.4L7.7 14.7l1.6-1.6a1 1 0 00-1.4-1.4l-2.3 2.3a1 1 0 000 1.4l2.3 2.3a1 1 0 001.4 0z',
    bgIcon: 'M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4V7a5 5 0 0 0-5-5z'
  }
]

const benefits = [
  {
    title: 'Comunidad Galáctica',
    description: 'Conéctate con miles de reclutas y expertos en IA de todo el universo.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'
  },
  {
    title: 'Certificaciones Espaciales',
    description: 'Valida tus habilidades con diplomas digitales NFT únicos en la red.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  },
  {
    title: 'Proyectos Reales',
    description: 'Aprende haciendo con laboratorios prácticos y desafíos de despliegue.',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  }
]
</script>

<template>
  <div class="transition-colors duration-500 min-h-screen bg-[#f8f9fa] dark:bg-deep-space text-slate-900 dark:text-white selection:bg-cyber-cyan selection:text-deep-space">
    <!-- HERO SECTION -->
    <header class="relative px-6 pt-20 pb-16 text-center overflow-hidden">
      <!-- Grid pattern for light mode -->
      <div class="absolute inset-0 dark:hidden opacity-[0.4]" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <!-- Background Effects Dark Mode -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_40%,rgba(0,240,255,0.08)_0%,transparent_60%)] -z-10 hidden dark:block"></div>
      
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="relative inline-block group">
          <Astronaut v-if="isDark" size="lg" emotion="happy" />
          <div v-else class="w-56 h-56 relative">
            <div class="absolute inset-0 bg-cyber-cyan/10 rounded-full blur-[40px] animate-pulse"></div>
            <img src="@/assets/illustrations/hero-astronaut.png" alt="Astronaut" class="w-full h-full object-contain relative z-10 animate-float" />
          </div>
          <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#00F0FF22] border border-cyber-cyan/50 text-cyber-cyan text-[10px] font-heading font-bold px-4 py-1.5 rounded-full shadow-glow-cyan uppercase tracking-widest whitespace-nowrap">
            ¡Nuevo Cadete!
          </div>
        </div>
        
        <div class="space-y-4">
          <h1 class="text-5xl md:text-7xl font-heading tracking-tight text-slate-900 dark:text-white">
            ANTIGRAVITY <br>
            <span class="text-gradient-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">ACADEMY</span>
          </h1>
          <p class="text-slate-600 dark:text-gray-mist text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            La primera academia espacial donde aprendes a construir el futuro de la IA.
          </p>
        </div>

        <div class="flex flex-col items-center space-y-6">
          <Button variant="primary" class="btn-gradient text-lg px-14 py-5 shadow-2xl" @click="router.push('/module-1')">
            COMENZAR AVENTURA
          </Button>
          <button @click="router.push('/dashboard')" class="text-cyber-cyan font-heading text-xs tracking-[0.2em] hover:text-slate-900 dark:hover:text-white transition-colors">
            MI PANEL
          </button>
        </div>
      </div>
    </header>

    <!-- NUESTROS CURSOS -->
    <section class="pl-6 md:pl-20 py-20 overflow-hidden">
      <div class="max-w-[1400px] mx-auto pr-6 md:pr-20 mb-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
        <h2 class="text-3xl md:text-4xl font-heading tracking-widest text-slate-900 dark:text-white">
          NUESTROS <span class="text-cyber-cyan">CURSOS</span>
        </h2>
        
        <div class="flex items-center gap-8">
          <!-- Navigation Arrows -->
          <div class="hidden md:flex items-center gap-4">
            <button 
              @click="scrollSlider('left')" 
              class="w-10 h-10 rounded-xl border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan hover:bg-cyber-cyan hover:text-deep-space transition-all active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              @click="scrollSlider('right')" 
              class="w-10 h-10 rounded-xl border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan hover:bg-cyber-cyan hover:text-deep-space transition-all active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <a href="#" class="text-cyber-cyan text-xs font-bold font-heading tracking-[0.3em] hover:text-slate-900 dark:hover:text-white transition-all uppercase border-b border-cyber-cyan/30 pb-1">
            ver todo
          </a>
        </div>
      </div>

      <!-- Slider Container -->
      <div ref="sliderRef" class="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        <div v-for="(course, idx) in courses" :key="idx" class="snap-center first:ml-0">
          <CourseCard 
            v-bind="course"
          />
        </div>
        
        <!-- Next Course Placeholder -->
        <div class="snap-center">
          <div class="w-[320px] md:w-[380px] h-[340px] bg-slate-50 dark:bg-transparent border-2 border-dashed border-slate-200 dark:border-white/5 rounded-[32px] flex flex-col items-center justify-center space-y-4 opacity-30 grayscale hover:opacity-50 transition-all cursor-pointer">
            <div class="w-16 h-16 rounded-full border border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center text-3xl font-light text-slate-400 dark:text-white">
              +
            </div>
            <p class="font-heading text-xs uppercase tracking-widest text-center text-slate-900 dark:text-white">
              Agentes Multi-Modales<br>
              <span class="text-cyber-cyan/60">Próximamente</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFICIOS -->
    <section class="px-6 py-24 bg-slate-100/50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
      <div class="max-w-4xl mx-auto space-y-16">
        <h2 class="text-center text-3xl font-heading tracking-widest text-slate-900 dark:text-white">BENEFICIOS</h2>
        
        <div class="space-y-12">
          <div v-for="(benefit, idx) in benefits" :key="idx" class="flex gap-8 group">
            <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#131933] border border-slate-200 dark:border-white/5 flex items-center justify-center text-cyber-cyan group-hover:border-cyber-cyan/30 transition-all shadow-sm group-hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="benefit.icon" />
              </svg>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-heading text-slate-900 dark:text-white group-hover:text-cyber-cyan transition-colors">{{ benefit.title }}</h3>
              <p class="text-slate-600 dark:text-gray-mist leading-relaxed text-sm md:text-base">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMO PACK PRO -->
    <PromoPack />

    <!-- DISCORD CTA -->
    <section class="px-6 py-24 max-w-6xl mx-auto">
      <div class="bg-gradient-to-br from-white to-slate-50 dark:from-[#161B33] dark:to-[#0A0D1F] p-12 rounded-[40px] border border-slate-200 dark:border-white/10 text-center space-y-8 relative overflow-hidden group shadow-xl dark:shadow-none">
        <!-- Glow Light -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-glow/10 dark:bg-indigo-glow/20 blur-[80px] -z-10 group-hover:bg-indigo-glow/30 transition-all"></div>
        
        <div class="flex justify-center">
           <div class="w-16 h-16 bg-soft-purple/20 rounded-2xl flex items-center justify-center text-soft-purple">
             <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13.91V21l-4-4h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8.91z"/><path d="M14 9h.01"/><path d="M10 9h.01"/></svg>
           </div>
        </div>
        
        <div class="space-y-4">
          <h2 class="text-3xl font-heading tracking-wide text-slate-900 dark:text-white">Únete al Discord</h2>
          <p class="text-slate-600 dark:text-gray-mist max-w-lg mx-auto leading-relaxed">
            Comparte, aprende y despega con nuestra comunidad oficial.
          </p>
        </div>
        
        <Button variant="secondary" class="bg-indigo-glow text-white border-none py-4 px-12 hover:bg-white hover:text-indigo-glow shadow-lg shadow-indigo-glow/20">
          JOIN OUR DISCORD
        </Button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="px-6 py-12 border-t border-slate-200 dark:border-white/5 text-center space-y-8">
      <div class="flex justify-center gap-8">
         <a href="#" class="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
         </a>
         <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-cyber-cyan hover:border-cyber-cyan transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
         </a>
         <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-cyber-cyan hover:border-cyber-cyan transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
         </a>
      </div>
      
      <div class="space-y-4">
        <p class="text-[10px] font-heading tracking-[0.5em] text-slate-400 dark:text-white/40">ANTIGRAVITY ACADEMY © 2026</p>
        <div class="w-1/4 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto opacity-30 shadow-[0_0_10px_rgba(0,240,255,1)]"></div>
      </div>
    </footer>

    <!-- THEME TOGGLE FLOATING -->
    <div class="fixed bottom-6 right-6 z-50">
       <button 
         @click="toggleTheme"
         class="w-14 h-14 bg-white dark:bg-[#161B33]/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-warning-yellow shadow-xl dark:shadow-2xl hover:scale-110 transition-all cursor-pointer"
       >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
       </button>
    </div>
  </div>
</template>

<style scoped>
.btn-gradient {
  background: linear-gradient(135deg, #00F0FF 0%, #6B46C1 100%);
}
</style>
