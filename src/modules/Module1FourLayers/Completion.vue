<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Astronaut from '@/components/game/Astronaut.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

const router = useRouter()
const userStore = useUserStore()
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center p-6">
    <Card type="level" class="max-w-3xl w-full text-center p-12 space-y-8 animate-slide-up">
      <div class="relative inline-block">
        <Astronaut size="lg" emotion="happy" />
        <div class="absolute inset-0 bg-cyber-cyan/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl md:text-6xl font-heading glow-text-cyan">¡MISIÓN CUMPLIDA!</h1>
        <p class="text-xl text-gray-mist">
          Has completado el Módulo 1: Las 4 Capas. 
          Ahora comprendes cómo piensan y trabajan los agentes de Antigravity.
        </p>
      </div>

      <div class="p-6 bg-cyber-cyan/10 rounded-2xl border border-cyber-cyan/30 inline-block">
        <p class="text-sm text-cyber-cyan font-bold uppercase tracking-widest">Recompensa Obtenida</p>
        <p class="text-4xl font-heading text-white mt-1">Badge: Arquitecto Base</p>
        <p class="text-gray-mist mt-2">+600 XP Totales</p>
      </div>

      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <Button variant="primary" size="lg" @click="router.push('/dashboard')">
          IR AL DASHBOARD
        </Button>
        <Button variant="ghost" size="lg" @click="router.push('/')">
          PÁGINA PRINCIPAL
        </Button>
      </div>
    </Card>
  </div>
</template>
