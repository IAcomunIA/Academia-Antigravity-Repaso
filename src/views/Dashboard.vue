<script setup>
import { useUserStore } from '@/stores/user'
import { useGameStore } from '@/stores/game'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const gameStore = useGameStore()
const router = useRouter()
</script>

<template>
  <div class="p-6 md:p-12 space-y-12 text-slate-900 dark:text-white max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-end gap-6">
      <div class="space-y-2">
        <p class="text-cyber-cyan font-heading uppercase tracking-widest text-sm">Estado de Misión</p>
        <h1 class="text-5xl font-heading glow-text-cyan">{{ userStore.username }}</h1>
      </div>
      <div class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl flex items-center gap-8 backdrop-blur-md shadow-sm dark:shadow-none">
        <div class="text-center">
          <p class="text-xs text-slate-400 dark:text-gray-dim uppercase">Rango</p>
          <p class="font-heading text-cyber-cyan">{{ userStore.currentRank }}</p>
        </div>
        <div class="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
        <div class="text-center">
          <p class="text-xs text-slate-400 dark:text-gray-dim uppercase">Nivel</p>
          <p class="font-heading text-slate-900 dark:text-white text-xl">{{ userStore.level }}</p>
        </div>
        <div class="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
        <div class="text-center">
          <p class="text-xs text-slate-400 dark:text-gray-dim uppercase">Puntos XP</p>
          <p class="font-heading text-slate-900 dark:text-white text-xl">{{ userStore.xp }}</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Módulos -->
      <Card class="md:col-span-2" type="space" title="Módulos en Curso">
        <template #header>
          <h2 class="text-2xl font-heading p-6 border-b border-white/10">Misiones Disponibles</h2>
        </template>
        <div class="p-6 space-y-6">
          <div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-lg bg-cyber-cyan/20 flex items-center justify-center text-cyber-cyan font-bold">01</div>
              <div>
                <h3 class="font-heading text-lg text-slate-900 dark:text-white">Las 4 Capas</h3>
                <p class="text-sm text-slate-500 dark:text-gray-mist">Arquitectura Base de Agentes</p>
              </div>
            </div>
            <Button variant="secondary" @click="router.push('/module-1')">CONTINUAR</Button>
          </div>
          <div class="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 opacity-50 grayscale">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-lg bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-400 dark:text-gray-dim">02</div>
              <div>
                <h3 class="font-heading text-lg text-slate-900 dark:text-white">Multi-Agent Systems</h3>
                <p class="text-sm text-slate-500 dark:text-gray-mist">Próximamente...</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Logros -->
      <Card type="character">
        <h2 class="text-xl font-heading mb-6">Medallas Obtenidas</h2>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="aspect-square rounded-full bg-deep-space border border-white/10 flex items-center justify-center opacity-20">
            <span class="sr-only">Bloqueado</span>
            🔒
          </div>
        </div>
        <p class="mt-6 text-sm text-gray-mist italic">Completa niveles para desbloquear medallas estelares.</p>
      </Card>
    </div>
  </div>
</template>
